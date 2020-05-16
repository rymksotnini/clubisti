var Transfer = artifacts.require("./MoneyTransfer1.sol");
var ConvertLib = artifacts.require("./ConvertLib.sol");
module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, Transfer);
  deployer.deploy(Transfer);
};
