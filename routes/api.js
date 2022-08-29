'use strict';

const expect = require('chai').expect
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert',(req, res) => {
  
    const input = req.query.input;

    if(!input){
      res.send("No input provided");
    }

    let num = convertHandler.getNum(input);
    let unit = convertHandler.getUnit(input);
  //console.log("API unit: ",unit)

    if((num == "invalid number")&&(unit == "invalid unit")){
      res.send("invalid number and unit")
      return;
    }
    else if(num == "invalid number"){
      res.send(num);
      return;
    }
    else if(unit == "invalid unit"){
      res.send(unit);
      return;
    }
    let return_unit = convertHandler.getReturnUnit(unit);

    let input_unit = convertHandler.spellOutUnit(unit);
    let output_unit = convertHandler.spellOutUnit(return_unit);
    
    let output_num = convertHandler.convert(num, unit);
    let output_string = convertHandler.getString(num,input_unit,output_num,output_unit);
   

    res.json({
      "initNum": num,
      "initUnit": unit,
      "returnNum": output_num,
      "returnUnit": return_unit,
      "string": output_string
    })
  });

 

  // app.use((req, res, next) => {
  //   res.status(404).type('text').send('Not Found - Please reload page.');
  // });


};
