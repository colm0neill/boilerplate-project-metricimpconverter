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

    let rep = convertHandler.getNum(input);
    let unit = convertHandler.getUnit(input);
    let unit_type = convertHandler.getReturnUnit(rep);

    console.log("rep is:", rep);
    console.log("unit is:", unit);
    console.log("Has only on slash for fraction", unit_type);

    res.send("Conversion Request: "+rep+" Unit: "+ unit+" Is fraction: "+unit_type);
  });

 

  // app.use((req, res, next) => {
  //   res.status(404).type('text').send('Not Found - Please reload page.');
  // });


};
