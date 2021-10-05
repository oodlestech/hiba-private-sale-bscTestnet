const Migrations = artifacts.require("Migrations");

// module.exports = function (deployer) {
//   deployer.deploy(Migrations);
// };

module.exports = async function (deployer, network) {

  if(network === 'bscTestnet' || network === 'develop') {
      deployer.deploy(Migrations);
  }

  if(network === 'bsc') {
    //Deployment logic for mainnet
      deployer.deploy(Migrations);
  }
};
