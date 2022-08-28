function ConvertHandler() {
  

  this.getNum = function(input) {
    let result;
    
    const num = input.toLowerCase().replace(/[abcdefghijklmnopqrstuvwxyz]/g, '');
    result = num;

    return result;
  };
  
  this.getUnit = function(input) {
    let result;

    const unit = input.toLowerCase().replace(/[^abcdefghijklmnopqrstuvwxyz]/g,'')

    result = unit;
    
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;

    let validFraction;

    let fraction = (initUnit.match(new RegExp("/", "g")) || []).length;

    if(fraction == 1){
      //Check for number of forward slashes if not greater than 1 move on.
      let numbers_array = initUnit.split('/');
      
      if(numbers_array.length ==2){
        // If the number of numbers either side of the forward slash equals 2 then move on.
        var num1 = numbers_array[0] % 1;
        var num2 = numbers_array[1] % 1;
        console.log("Nums 1: "+num1 +" 2: "+num2);

        if((num1 === 0 )&&(num2 === 0)){
          //If the two numbers equal zero after modulus then both are whole numbers.
          validFraction = numbers_array[0]+"/"+numbers_array[1];
        } else { 
          result = false;
        }
        
      }
      else{ result = false}
      
    }else{ result = false;}

    if(validFraction){
      result = validFraction;
    }
    
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    
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
