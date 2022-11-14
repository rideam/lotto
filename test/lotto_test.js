const Lotto = artifacts.require("Lotto");

/*
 * uncomment accounts to access the test accounts made available by the
 * Ethereum client
 * See docs: https://www.trufflesuite.com/docs/truffle/testing/writing-tests-in-javascript
 */
contract("Deployed", function (/* accounts */) {
  it("successful deploy", async function () {
    await Lotto.deployed();
    return assert.isTrue(true);
  });
});

contract("Current Prize", function () {
  it("initial prize is zero", async function () {
    const contract = await Lotto.deployed();
    const a = await contract.prizeAmount()
    expect(Number(a)).to.equal(0);
  });
});

contract("Play", function (/* accounts */) {
  it("should assert true", async function () {
    const contract = await Lotto.deployed();
    const a = await contract.play(20,{ value: web3.utils.toWei("0.001","ether")});
    // await expect(a).to.emit('LottoEvent');
    // return assert.isTrue(true);
  });
});

contract("Not payed", function (/* accounts */) {
  it("cannot play without paying", async function () {
    const contract = await Lotto.deployed();
    let err = null;
    try{
     await contract.play(20,{ value: web3.utils.toWei("0","ether")});
    } catch (e) {
      err = e
    }
    assert.ok(err instanceof Error)
    // await expect(a).to.be.revertedWith('You need to send 0.001 ETH!');
    // return assert.isTrue(true);
  });
});
