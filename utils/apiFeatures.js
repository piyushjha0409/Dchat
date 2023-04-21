import {chatAppAddress, chatAppABI, chatContractABI} from "../Context/Constans"
import web3modal from "web3modal"

// check wallet function 
export const checkIfWalletConnected = async () => {
  try{
    if(!window.ethereum) return console.log("Install Metamask")

    const accounts = await window.ethereum.request({
        method: "eth_accounts",
    })

    //we will get the array of the account 
    let firstAccount = accounts[0];
    return firstAccount;
  }catch(err){
    console.error(err)
  }
}

//connect wallet function 
export const connectWallet = async () => {
try{
    if(!window.ethereum) return console.log("Install metamask")
 
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts"   
    })
    const firstAccount = accounts[0];
    return firstAccount;
}catch(err){
    console.error(err)
}
}

//function for the fetching the details of the contract 
const fetchContract = (signerOrProvider) => {
 new ethers.Contract(chatAppAddress, chatContractABI, signerOrProvider);
}

//function for connecting the contract
export const connectingWithContract = async() => {
    try{
        const web3modal = await new web3modal();
        const connection = web3modal.connect();
        const provider = new ethers.providers.Web3Provider(connection)
        const signer = provider.getSigner(); 
        const contract = fetchContract(signer)
        return contract;
    }catch(err){
        console.error(err)
    }
}

//function for the converting the timestamp
export const timeFunction = async (time) => {
  const newTime = new Date(time.toNumber());

  const realTime = newTime.getHours() + "/" + newTime.getMinutes() + "/" + newTime.getSeconds() + " Date:" + newTime.getDate() + "/" + (newTime.getMonth() + 1) + "/" + newTime.getFullYear();

  return realTime;
} 