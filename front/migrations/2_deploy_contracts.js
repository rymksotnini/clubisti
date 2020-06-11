// var ConvertLib = artifacts.require("./ConvertLib.sol")

// var MetaCoin = artifacts.require("./MetaCoin.sol")

var Clubisti =  artifacts.require("./Clubisti.sol")

var Test =  artifacts.require("./Test.sol");

module.exports = function(deployer) {
  deployer.deploy(Clubisti)
  deployer.deploy(Test)


};

// smartContract.addTransaction("0x31303030302c31303030302c31303030302c3130303030",1019)
