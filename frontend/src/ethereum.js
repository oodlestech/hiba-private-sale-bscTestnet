import { ethers, Contract } from 'ethers';
import HibaSale from './contracts/HibaSale.json';
import Token from './contracts/Token.json';

export const getBlockchain = async (metamaskInstance) =>  {
  if (metamaskInstance) {
    const provider = new ethers.providers.Web3Provider(metamaskInstance);

    // const signer = provider.getSigner();
    // console.log(signer, "sss");
    // const signerAddress = await signer.getAddress();

    const {chainId} = await provider.getNetwork();

    return {provider, networkId: chainId}
  }
  return null;
}

export const getContract = async (metamaskInstance) => {
  const blockchain = await getBlockchain(metamaskInstance);
  console.log(blockchain, "blockchain");
  if (blockchain !== null) {
    const {provider, networkId} = blockchain;

    const hibaSale = new Contract(
      HibaSale.networks[networkId].address,
      HibaSale.abi,
      provider
    );

    const hibaToken = new Contract(
      Token.networks[networkId].address,
      Token.abi,
      provider
    );

    // console.log(await hibaToken.balanceOf("0xA1eC1b1F80Ce5047430684B20573FaCBdebfa558"));

    return {hibaSale, hibaToken}
  }
}

export const getBNBPrice = async () => {
  const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd");
  const price = await response.json();

  return price?.binancecoin?.usd || 0;
}
