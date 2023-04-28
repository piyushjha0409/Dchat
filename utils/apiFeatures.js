import Web3Modal from "web3modal";
import {ethers} from "ethers"
import Web3 from "web3";

//INTERNAL IMPORT
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


//connect wallet function 
export const connectWallet = async () => {
  if (!window.ethereum) return console.log("Install MetaMask");
  
  try {
  //connect the user's metamask wallet 
  const provider = new Web3(window.ethereum)
  const accounts = await provider.eth.getAccounts();
  console.log(accounts[0]); //this is showing the wallet address
  } catch (error) {
    console.log(error);
  }

};



//function for the fetching the details of the contract 
const fetchContract = (signerOrProvider) => {
  try{
    new ethers.Contract(chatContractAddress, chatContractABI, signerOrProvider)
  }catch(err){
    console.log("error fetching")
  }
}


//function for connecting the contract
export const connectingWithContract = async () => {
  try {
    const web3modal = new Web3Modal();  //creating the new instance  
    const connection = await web3modal.connect(); //this connect method connects the user's ethereum wallet
    const provider = new ethers.providers.Web3Provider(connection); //creating a new instance from web3providers
    const signer = provider.getSigner();
    const contract = fetchContract(signer);
    return contract;
  } catch (error) {
    // console.log("error fetching")
    console.log(error);
  }
  // try{
    
  // }catch(error){
  //   console.log(error);
  // }
};

//function for the converting the timestamp
export const timeFunction = async (time) => {
  const newTime = new Date(time.toNumber());

  const realTime = newTime.getHours() + "/" + newTime.getMinutes() + "/" + newTime.getSeconds() + " Date:" + newTime.getDate() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getFullYear();

  return realTime;
} 