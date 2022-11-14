var Lotto = artifacts.require("Lotto");


module.exports = async function (deployer) {
  // deployer.deploy(CarbonCreditTokenArtifact, BigInt(100*10**18));

  await Promise.all(
      [Lotto].map(contract => deployer.deploy(contract))
  );


};
