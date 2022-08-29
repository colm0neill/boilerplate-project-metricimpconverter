function numberStringSplitter(input) {
  let number = input.match(/[.\d\/]+/g) || ["1"];
  let string = input.match(/[a-zA-Z]+/g)[0];

  return [number[0], string];
}

function checkDiv(possibleFraction) {
  let nums = possibleFraction.split("/");
  if (nums.length > 2) {
    return false
  }
  return nums
};

function ConvertHandler() {


  this.getNum = function (input) {
    let result = numberStringSplitter(input)[0];
    let nums = checkDiv(result);

    if (!nums) {
      return "invalid number";
    }

    let num1 = nums[0];
    let num2 = nums[1] || "1";

    result = parseFloat(num1) / parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
      return "invalid number";
    }

    return result;
    //   let num = input.toLowerCase().replace(/[abcdefghijklmnopqrstuvwxyz]/g, '');

    // let pip_check = num.slice((num.length - 1),num.length);
    // //console.log(num.length," ",pip_check);
    // if (pip_check == "."){
    //   //console.log("has a pip");
    //   num = num.slice(0,(num.length-1));
    //   //console.log("num is:",num)
    // }
    // if(isNaN(num)){
    //   return "invalid number";
    // }

    //   let fraction = (num.match(new RegExp("/", "g")) || []).length;

    //   if (fraction == 1) {
    //     //Check for number of forward slashes if not greater than 1 move on.
    //     //console.log("Has one slash present");
    //     let numbers_array = input.split('/');

    //       if (numbers_array.length == 2) {
    //         // If the number of numbers either side of the forward slash equals 2 then move on.
    //         var num1 = parseFloat(numbers_array[0]);
    //         var num2 = parseFloat(numbers_array[1]);

    //         if(isNaN(num1) || isNaN(num2)){
    //           return "invalid number";
    //         }
    //         //console.log("Nums 1: " + parseFloat(numbers_array[0]) + " 2: " + parseFloat(numbers_array[1]));
    //         //console.log("Nums 1: " + typeof num1 + " 2: " + typeof num2);
    //         if(!(num1)){
    //           return "invalid number";
    //         }
    //         if(!(num2)){
    //           return "invalid number";
    //         }

    //           if ((typeof (num1) === 'number') && (typeof (num2) === 'number')) {
    //             //console.log("Both are valid numbers");
    //             //If the two numbers equal zero after modulus then both are whole numbers.
    //             result = num1/num2;
    //           } else {
    //             result = "invalid number";
    //           }
    //       }
    //         else {
    //           result = "invalid number";
    //         }








    // }
    // else if(fraction > 1){
    //   result = "invalid number"
    // }
    // else if(num) {
    //   //console.log("Just number")
    //   result = num;
    // }
    // else {
    //   //console.log("provided no number")
    //   result = 1;
    // }

    //console.log("Number RESULT: "+result);


    return result;
  };

  this.getUnit = function (input) {

      let result = numberStringSplitter(input)[1].toLowerCase();
      switch (result) {
        case"km":
          return "km";
        case"gal":
          return"gal";
        case "lbs":
          return "lbs";
        case "mi":
          return "mi";
        case "l":
          return "L";
        case"kg":
          return "kg";
        default:
          return "invalid unit";
      }
      return result;

      // let result;

      // const unit = input.toLowerCase().replace(/[^abcdefghijklmnopqrstuvwxyz]/g, '')


      // const valid_units = ["gal", "l", "mi", "km", "kg", "lbs"]

      // if (valid_units.includes(unit)) {
      //   result = unit;
      // }
      // else {
      //   result = "invalid unit"
      // }

      // if (result == "l") {
      //   result = result.toUpperCase();
      // }
      // return result;
    };

    this.getReturnUnit = function (initUnit) {

      //console.log("Unit:", initUnit)
      let unit = initUnit.toLowerCase();
      

      switch (unit) {
        case"km":
          return "mi";
        case"gal":
          return"L";
        case "lbs":
          return "kg";
        case "mi":
          return "km";
        case "l":
          return "gal";
        case"kg":
          return "lbs";
        default:
          return undefined;
      }
      return result;

      // let result;

      // initUnit = initUnit.toLowerCase();

      // const metric = ["l", "km", "kg"];
      // const imperial = ["gal", "mi", "lbs"];

      // if (metric.includes(initUnit)) {
      //   for (var i = 0; i < metric.length; i++) {
      //     if (initUnit == metric[i]) {
      //       result = imperial[i];
      //     }
      //   }
      // } else {
      //   for (var i = 0; i < imperial.length; i++) {
      //     if (initUnit == imperial[i]) {
      //       result = metric[i];
      //     }
      //   }
      // }

      // if (result == "l") {
      //   result = result.toUpperCase();
      // }

      // return result;
    };

    this.spellOutUnit = function (unit) {

      let unit2 = unit.toLowerCase()
      switch (unit2) {
        case"km":
          return "kilometers";
        case"gal":
          return"gallons";
        case "lbs":
          return "pounds";
        case "mi":
          return "miles";
        case "l":
          return "liters";
        case"kg":
          return "kilograms";
        default:
          return "don't know";
      }
      return result;
      // let result;

      // unit = unit.toLowerCase();

      // const imperial_full = ["gallons", "pounds", "miles"];
      // const imperial = ["gal", "lbs", "mi"];

      // const metric_full = ["liters", "kilograms", "kilometers"];
      // const metric = ["l", "kg", "km"];


      // if (metric.includes(unit)) {
      //   for (var i = 0; i < metric.length; i++) {
      //     if (unit == metric[i]) {

      //       result = metric_full[i];
      //     }
      //   }
      // } else {
      //   for (var v = 0; v < imperial.length; v++) {
      //     if (unit == imperial[v]) {
      //       result = imperial_full[v];
      //     }
      //   }
      // }

      // return result;
    };

    this.convert = function (initNum, initUnit) {
      const galToL = 3.78541;
      const lbsToKg = 0.453592;
      const miToKm = 1.60934;
      let result;

      initUnit = initUnit.toLowerCase();
      //console.log(initUnit, ": is unit");

      const imperial = ["gal", "lbs", "mi"];
      const metric = ["l", "kg", "km"];

      if (imperial.includes(initUnit)) {
        //console.log("got into if");
        switch (imperial.indexOf(initUnit)) {
          case 0:
            //console.log("Case 1-1");
            result = initNum * galToL;
            break
          case 1:
            //console.log("Case 2-1");
            result = initNum * lbsToKg;
            break
          case 2:
            //console.log("Case 3-1");
            result = initNum * miToKm;
            break
        }
      } else {
        //console.log("got into else");

        switch (metric.indexOf(initUnit)) {
          case 0:
            //console.log("Case 1-2");
            result = initNum / galToL;
            break
          case 1:
            //console.log("Case 2-2");
            result = initNum / lbsToKg;
            break
          case 2:
            //console.log("Case 3-2");
            result = initNum / miToKm;
            break
        }
      }
      
      return parseFloat(result.toFixed(5));
      
    };

    this.getString = function (initNum, initUnit, returnNum, returnUnit) {
      let result;


      return initNum + " " + initUnit + " converts to " + returnNum + " " + returnUnit;

    };

  }

  module.exports = ConvertHandler;




