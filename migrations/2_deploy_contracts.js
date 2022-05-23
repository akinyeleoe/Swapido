const Token = artifacts.require('Token')
const EthSwap = artifacts.require("EthSwap");


module.exports = (deployer) =>{
  deployer.deploy(EthSwap);
};
