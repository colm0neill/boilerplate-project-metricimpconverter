const chaiHttp = require('chai-http');
const chai = require('chai');
let assert = chai.assert;
const server = require('../server');

chai.use(chaiHttp);


// Convert a valid input such as 10L: GET request to /api/convert.
// Convert an invalid input such as 32g: GET request to /api/convert.
// Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.
// Convert an invalid number AND unit such as 3/7.2/4kilomegagram: GET request to /api/convert.
// Convert with no number such as kg: GET request to /api/convert.

suite('Functional Tests', function() {
    test('1. Convert a valid input, 10L GET req /api/convert.', function (done) {
        chai
          .request(server)
          .get('/api/convert')
          .query("input=10L")
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, "application/json");
            assert.equal(res.body.returnNum, 2.64172);
            done();
          });
      });
      test('2. Convert an invalid input such as 32g GET req /api/convert.', function (done) {
        chai
          .request(server)
          .get('/api/convert')
          .query("input=32g")
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, "invalid unit");
            done();
          });
      });
      test('3. Convert an invalid number such as 3/7.2/4kg: GET request to /api/convert.', function (done) {
        chai
          .request(server)
          .get('/api/convert')
          .query("input=/7.2/4kg")
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, "invalid number");
            done();
          });
      });
      test('4. Convert an invalid number AND unit such as 3/7.2/4kilomegagram.', function (done) {
        chai
          .request(server)
          .get('/api/convert')
          .query("input=3/7.2/4kilomegagram")
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.text, "invalid number and unit");
            done();
          });
      });
      test('5. Convert with no number such as kg.', function (done) {
        chai
          .request(server)
          .get('/api/convert')
          .query("input=kg")
          .end(function (err, res) {
            assert.equal(res.status, 200);
            assert.equal(res.type, "application/json");
            assert.equal(res.body.returnNum, 2.20462);
            done();
          });
      });
});
