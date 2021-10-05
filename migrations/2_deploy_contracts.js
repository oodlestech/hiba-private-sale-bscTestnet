const StakingPool = artifacts.require("StakingPool.sol");

// syntax for default nettwork (eth network)
// module.exports = function (deployer) {
//   deployer.deploy(StakingPool);
// };


module.exports = async function (deployer, network) {

  if(network === 'bscTestnet' || network === 'develop') {
    await deployer.deploy(StakingPool);
  }

  if(network === 'bsc') {
    //Deployment logic for mainnet
    await deployer.deploy(StakingPool);
  }
};
