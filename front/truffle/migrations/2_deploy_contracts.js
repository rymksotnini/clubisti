var Transfer = artifacts.require("./MoneyTransfer.sol");
module.exports = function(deployer) {
  deployer.deploy(Transfer);
};
