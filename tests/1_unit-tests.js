const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

// 1 should correctly read a whole number input.
// 2 should correctly read a decimal number input.
// 3 should correctly read a fractional input.
// 4 should correctly read a fractional input with a decimal.
// 5 should correctly return an error on a double-fraction (i.e. 3/2/3).
// 6 should correctly default to a numerical input of 1 when no numerical input is provided.
// 7 should correctly read each valid input unit.
// 8 should correctly return an error for an invalid input unit.
// 9 should return the correct return unit for each valid input unit.
// 10 should correctly return the spelled-out string unit for each valid input unit.


let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
    test('1. Should correctly read a whole number', function () {
        assert.equal(convertHandler.getNum("1mi"), 1);
        assert.notEqual(convertHandler.getNum(".333mi"),1, '1 is not null');
        assert.notEqual(convertHandler.getNum("3/4mi"),1, '1 is not null');
      });

      test('2. Should correctly read a decimal number', function () {
        assert.equal(convertHandler.getNum("1.33mi"), 1.33);
        assert.notEqual(convertHandler.getNum("1mi"),1.33);
        assert.notEqual(convertHandler.getNum("3/4mi"),1.33);
      });
      test('3. Should correctly read a fractional input', function () {
        assert.equal(convertHandler.getNum("3/4mi"), .75);
        assert.notEqual(convertHandler.getNum("1mi"),.75);
        assert.equal(convertHandler.getNum(".75mi"),.75);
      });
      test('4. Should correctly read a fractional input with a decimal', function () {
        assert.equal(convertHandler.getNum("0.33/3mi"), 0.11);
        assert.notEqual(convertHandler.getNum("1mi"),0.11, '1 is not null');
        assert.notEqual(convertHandler.getNum("3/4mi"),0.11, '1 is not null');
      });
      test('5. Should correctly return an error on a double-fraction (i.e. 3/2/3)', function () {
        assert.equal(convertHandler.getNum("1.5/5/5.4mi"),"invalid number");
        assert.notEqual(convertHandler.getNum("1.0185185185185184mi"),"invalid number");
      });
      test('6. Should correctly default to a numerical input of 1 when no numerical input is provided.', function () {
        assert.equal(convertHandler.getNum("mi"), 1);
        assert.notEqual(convertHandler.getNum("23mi"),1, '1 is not null');
        assert.notEqual(convertHandler.getNum("3/4/2mi"),1, '1 is not null');
      });
      test('7. Should correctly read each valid input unit.', function () {
        assert.equal(convertHandler.getUnit("1km"), "km", "Returns km");
        assert.equal(convertHandler.getUnit("1mi"), "mi", "Returns mi");
        assert.equal(convertHandler.getUnit("1kg"), "kg", "Returns kg");
        assert.equal(convertHandler.getUnit("1lbs"), "lbs", "Returns lbs");
        assert.equal(convertHandler.getUnit("1l"), "L", "Returns L");
        assert.equal(convertHandler.getUnit("1gal"), "gal", "Returns gal");    
      });
      test('8. Should correctly return an error for an invalid input unit.', function () {
        assert.equal(convertHandler.getUnit("1.33ni"), "invalid unit");
      });
      test('9. should return the correct return unit for each valid input unit', function () {
        assert.equal(convertHandler.getReturnUnit("mi"), "km");
        assert.equal(convertHandler.getReturnUnit("km"), "mi");
        assert.equal(convertHandler.getReturnUnit("lbs"), "kg");
        assert.equal(convertHandler.getReturnUnit("kg"), "lbs");
        assert.equal(convertHandler.getReturnUnit("gal"), "L");
        assert.equal(convertHandler.getReturnUnit("l"), "gal");
       
      });
      test('10. should correctly return the spelled-out string unit for each valid input unit.', function () {
        assert.equal(convertHandler.spellOutUnit("mi"), "miles");
        assert.equal(convertHandler.spellOutUnit("km"), "kilometers");
        assert.equal(convertHandler.spellOutUnit("lbs"), "pounds");
        assert.equal(convertHandler.spellOutUnit("kg"), "kilograms");
        assert.equal(convertHandler.spellOutUnit("gal"), "gallons");
        assert.equal(convertHandler.spellOutUnit("l"), "liters");
      });

// 11 should correctly convert gal to L.
// 12 should correctly convert L to gal.
// 13 should correctly convert mi to km.
// 14 should correctly convert km to mi.
// 15 should correctly convert lbs to kg.
// 16 should correctly convert kg to lbs.


      test('11. Should correctly convert gal to  L', function () {
        assert.equal(convertHandler.convert(1,"gal"), 3.78541);
      });
      test('12. should correctly convert L to gal', function () {
        assert.equal(convertHandler.convert(3.78541,"l"), 1.00000);
      });
      test('13. should correctly convert mi to km', function () {
        assert.equal(convertHandler.convert(1,"mi"), 1.60934);
      });
      test('14. should correctly convert km to mi', function () {
        assert.equal(convertHandler.convert(1.60934,"km"), 1.00000);
      });
      test('15. should correctly convert lbs to kg.', function () {
        assert.equal(convertHandler.convert(1,"lbs"), 0.45359);
      });
      test('16. should correctly convert kg to lbs.', function () {
        assert.equal(convertHandler.convert(0.45359,"kg"), 1.00000);
      });
});