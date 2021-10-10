const HibaSale = artifacts.require("HibaSale.sol");
const Token = artifacts.require("Token.sol");


module.exports = async function (deployer, network) {

  if(network === 'bscTestnet' || network === 'develop') {
    await deployer.deploy(HibaSale);
    await deployer.deploy(Token);
  }

  if(network === 'bsc') {
    //Deployment logic for mainnet
    await deployer.deploy(HibaSale);
    await deployer.deploy(Token);
  }
};
