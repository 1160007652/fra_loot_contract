const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Greeter', function () {
  it("Should return the new greeting once it's changed", async function () {
    const Loot = await ethers.getContractFactory('Loot');
    const lootContract = await Loot.deploy();

    await lootContract.deployed();

    const result = await lootContract.claim(1);
    console.log(result);

    const nftUri = await lootContract.tokenURI(1);
    console.log(nftUri);
    // expect(await greeter.claim()).to.equal('Hello, world!');

    // const setGreetingTx = await greeter.setGreeting('Hola, mundo!');

    // wait until the transaction is mined
    // await setGreetingTx.wait();

    // expect(await greeter.greet()).to.equal('Hola, mundo!');
  });
});
