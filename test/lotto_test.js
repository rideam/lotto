const Lotto = artifacts.require("Lotto");

// test contract deployed successfully
contract("Deployed", function () {
  it("successful deployed", async function () {
    await Lotto.deployed();
    return assert.isTrue(true);
  });
});

// test initial prize amount
contract("Current Prize", function () {
  it("initial prize is zero", async function () {
    const contract = await Lotto.deployed();
    const a = await contract.prizeAmount()
    expect(Number(a)).to.equal(0);
  });
});

// test that users cannot play without paying
contract("Not payed", function () {
  it("cannot play without paying", async function () {
    const contract = await Lotto.deployed();
    let err = null;
    try{
     await contract.play(20,{ value: web3.utils.toWei("0","ether")});
    } catch (e) {
      err = e
    }
    assert.ok(err instanceof Error)

  });
});

// test if the loss event is emmited
contract("Play", function () {
  it("player did not win", async function () {
    const contract = await Lotto.deployed();
    const a = await contract.play(20,{ value: web3.utils.toWei("0.001","ether")});
    const { logs } = a;
    const log = logs[0];
    assert.equal(log.event, 'LottoEvent');
    assert.equal(log.args.isWinner, false);

  });
});

// test if it is a win event 
contract("Play", function () {
  it("player won", async function () {
    const contract = await Lotto.deployed();
    const a = await contract.play(45,{ value: web3.utils.toWei("0.001","ether")});
    const { logs } = a;
    const log = logs[0];
    assert.equal(log.event, 'LottoEvent');
    assert.equal(log.args.isWinner, true);

  });
});