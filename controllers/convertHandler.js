function ConvertHandler() {
  

  this.getNum = function(input) {
    let result;
    
    const num = input.toLowerCase().replace(/[abcdefghijklmnopqrstuvwxyz]/g, '');
    
    console.log("number is :"+num)

    if(num){
      result = num;
    }
    else{
      result = 1;
    }

    return result;
  };
  
  this.getUnit = function(input) {
    let result;

    const unit = input.toLowerCase().replace(/[^abcdefghijklmnopqrstuvwxyz]/g,'')


    const valid_units = ["gal","l","mi","km","kg","lbs"]
    
    if(valid_units.includes(unit)){
    result = unit;
    }
    else{
      result = "NOT VALID UNIT"
    }

    if(result == "l"){
      result = result.toUpperCase();
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    initUnit = initUnit.toLowerCase();

    const metric = ["l","km","kg"];
    const imperial = ["gal","mi","lbs"];

    if (metric.includes(initUnit)){
    for(var i = 0; i < metric.length; i++){
      if(initUnit == metric[i]){
        result = imperial[i];
      }
    }
  }else{
    for(var i = 0; i < imperial.length; i++){
      if(initUnit == imperial[i]){
        result = metric[i];
      }
  }
  }

  if(result == "l"){
    result = result.toUpperCase();
  }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;

    unit = unit.toLowerCase();

    const imperial_full = ["gallons","pounds","miles"];
    const imperial = ["gal","lbs","mi"];

    const metric_full = ["liters","kilograms","kilometers"];
    const metric = ["l","kg","km"];

    
    if (metric.includes(unit)){
    for(var i = 0; i < metric.length; i++){
      if(unit == metric[i]){
        console.log("Metric output should be"+metric[i]);
        result = metric_full[i];
      }
    }
  }else{
    for(var v = 0; v < imperial.length; v++){
      if(unit == imperial[v]){
        result = imperial_full[v];
      }
  }
  }
    
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;



let validFraction;

    // let fraction = (initUnit.match(new RegExp("/", "g")) || []).length;

    // if(fraction == 1){
    //   //Check for number of forward slashes if not greater than 1 move on.
    //   let numbers_array = initUnit.split('/');
      
    //   if(numbers_array.length ==2){
    //     // If the number of numbers either side of the forward slash equals 2 then move on.
    //     var num1 = numbers_array[0] % 1;
    //     var num2 = numbers_array[1] % 1;
    //     console.log("Nums 1: "+num1 +" 2: "+num2);

    //     if((num1 === 0 )&&(num2 === 0)){
    //       //If the two numbers equal zero after modulus then both are whole numbers.
    //       validFraction = numbers_array[0]+"/"+numbers_array[1];
    //     } else { 
    //       result = false;
    //     }
        
    //   }
    //   else{ result = false}
      
    // }else{ result = false;}

    // if(validFraction){
    //   result = validFraction;
    // }
