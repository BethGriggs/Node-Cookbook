const assert = require("chai").assert;
const expect = require("chai").expect;
require("chai").should();

const calculator = require("../calculator.js");

describe("Calculator Test", () => {
  describe("add() Test", () => {
    it("add(1,2) should return 3", () => {
      // assert form
      assert.equal(calculator.add(1, 2), 3);
      // expect form
      expect(calculator.add(1, 2)).to.equal(3);
      // should form
      calculator.add(1, 2).should.equal(3);
    });
  });
});
