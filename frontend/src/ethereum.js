import detectEthereumProvider from '@metamask/detect-provider';
import { ethers, Contract } from 'ethers';
import HibaSale from './contracts/HibaSale.json';
import Token from './contracts/Token.json';

const getBlockchain = () =>
  new Promise( async (resolve, reject) => {
    let provider = await detectEthereumProvider();
    if(provider) {
      await provider.request({ method: 'eth_requestAccounts' });
      const networkId = await provider.request({ method: 'net_version' })
      provider = new ethers.providers.Web3Provider(provider);
      const signer = provider.getSigner();
      const signerAddress = await signer.getAddress();
  
      const hibaSale = new Contract(
        HibaSale.networks[networkId].address,
        HibaSale.abi,
        signer
      );

      const token = new Contract(
        Token.networks[networkId].address,
        Token.abi,
        signer
      );
      resolve({signerAddress, hibaSale, token});
      return;
    }
    reject('Install Metamask');
  });

export default getBlockchain;

