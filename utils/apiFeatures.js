import Web3Modal from "web3modal";
import {ethers} from "ethers"
import Web3 from "web3";
// import detectEthereumProvider from '@metmask/detect-provider'


import {chatContractABI, chatContractAddress} from "../Context/Constans"

// check wallet function 
// first method 
export const checkIfWalletConnected = async () => {
  const accounts = await window.ethereum.request({
    method: "eth_requestAccounts"
  });
  console.log(accounts[0])
  return accounts[0];
};

//second method
// const loadWeb3 = async () => {
// const provider = await detectEthereumProvider()

// if (provider) {
//   console.log('Ethereum successfully detected!')

//   const chainId = await provider.request({
//     method: 'eth_chainId'
//   })
// } else {
//   // if the provider is not detected, detectEthereumProvider resolves to null
//   console.error('Please install MetaMask!' )
// }
// }


//connect wallet function 
export const connectWallet = async () => {
  if (!window.ethereum) return console.log("Install MetaMask");
  
  //connect the user's metamask wallet 
  const provider = new Web3(window.ethereum)

  //requsting the access to the user's accounts
  try {
     await window.ethereum.enable()
  } catch (error) {
    console.log(error);
  }

  const accounts = await provider.eth.getAccounts();
  console.log(accounts[0]);
};



//function for the fetching the details of the contract 
const fetchContract = (signerOrProvider) => {
   new ethers.Contract(chatContractAddress, chatContractABI, signerOrProvider)
}


//function for connecting the contract
export const connectingWithContract = async () => {
  try {
    const web3modal = new Web3Modal();
    const connection = await web3modal.connect();
    const provider = new ethers.providers.Web3Provider(connection);
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    console.log(error);
  }
};

//function for the converting the timestamp
export const timeFunction = async (time) => {
  const newTime = new Date(time.toNumber());

  const realTime = newTime.getHours() + "/" + newTime.getMinutes() + "/" + newTime.getSeconds() + " Date:" + newTime.getDate() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getFullYear();

  return realTime;
} 