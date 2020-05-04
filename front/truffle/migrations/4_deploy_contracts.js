var Transfer = artifacts.require("./MoneyTransferTest1.sol");
var ConvertLib = artifacts.require("./ConvertLib.sol");
module.exports = function(deployer,network,accounts) {
  const userAddress = accounts[0];
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Transfer);
  deployer.deploy(Transfer,userAddress);
};
