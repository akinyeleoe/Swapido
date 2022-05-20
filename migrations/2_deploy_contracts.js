const EthSwap = artifacts.require("EthSwap");

module.exports = (deployer) =>{
  deployer.deploy(EthSwap);
};
