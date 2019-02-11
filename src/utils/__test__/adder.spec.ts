import { expect } from "chai";
import { adder } from "../test";
import "mocha";

describe("Adder", () => {
  it("should add correctly", () => {
    expect(adder(7, 8)).to.equal(15);
  });
});
