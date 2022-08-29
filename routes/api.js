'use strict';

const expect = require('chai').expect
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.get('/api/convert',(req, res) => {
    console.error("feck");
    console.log("hello there", req.query.input);

    const input = req.query.input;

    if(!input){
      res.send("No input provided");
    }

    let num = convertHandler.getNum(input);
    let unit = convertHandler.getUnit(input);
    let return_unit = convertHandler.getReturnUnit(unit);
    let input_unit = convertHandler.spellOutUnit(unit);
    let output_unit = convertHandler.spellOutUnit(return_unit);

    console.log("rep is:", num);
    console.log("unit is:", unit);
    console.log("Has only on slash for fraction", return_unit);

    res.send("Conversion Request: "+num+" Unit: "+ unit+" Return value: "+return_unit+" string: "+num+" "+ input_unit+" converts to 4.98895 "+output_unit);
  });

 

  // app.use((req, res, next) => {
  //   res.status(404).type('text').send('Not Found - Please reload page.');
  // });


};
