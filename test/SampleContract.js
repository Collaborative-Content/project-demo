const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Sample Contract", () => {
    let SampleContract, sampleContract;

    beforeEach(async () => {
        SampleContract = await ethers.getContractFactory("SampleContract");
        sampleContract = await SampleContract.deploy();
    });

    it("changing the test description", async () => {
        expect(sampleContract.greet())
            .to
            .emit(sampleContract, "Hello")
            .withArgs("Hello World!");
    });

});