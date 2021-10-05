import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import StakingPool from './contracts/StakingPool.json';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();

      const stakingPool = new Contract(
        StakingPool.networks[networkId].address,
        StakingPool.abi,
        signer
      );
      resolve({signerAddress, stakingPool});
      return;
    }
    reject('Install Metamask');
  });

export default getBlockchain;

