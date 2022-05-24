const Token = artifacts.require('Token')
const EthSwap = artifacts.require("EthSwap");

module.exports = async function(deployer){
  //Deploy Token
  await deployer.deploy(Token);
  const token = await Token.deployed()

  //Deploy Ethswap
  await deployer.deploy(EthSwap);
  const ethSwap = await EthSwap.deployed()

  //Transfer all token to Ethswap(1 million)
  await token.transfer(ethSwap.address, '100000000000000000')
}

module.exports = (deployer) =>{
  deployer.deploy(EthSwap);
};
