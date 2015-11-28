var expect = require("chai").expect;
var convert = require("../src/converter.js")

describe("Converter , numbers to roman numbers", function() {

it("converts  1 to I",function(){

expect(convert.convert(1)).to.equal('I');

})



});
