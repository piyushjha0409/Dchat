import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT 
import { checkIfWalletConnected, connectWallet, connectingWithContract } from "../utils/apiFeatures";

//created the context
export const ChatAppContext = React.createContext({}); 

export const ChatAppProvider = ({ children }) => {
    
    //USESTATES 
    const [accounts, setAccounts] = useState("")
    const [username, setUsername] = useState("")
    const [friendLists, setFriendList] = useState([]) //initializing the empty array
    const [friendMsg, setFriendMsg] = useState([])
    const [loading, setLoading] = useState(false); //initializing the value false
    const [uesrList, userLists] = useState([]) //empty array
    const [error, setError] = useState("")

    //CURRENT CHAT USER DATA
    const [currentUsername, setCurrentUsername] = useState("")
    const [currentUserAddress, setCurrentAddress] = useState("")

    //create router for the redirection after the login 
    const router = useRouter();

    //FETCH THE DATA AT THE TIME OF THE RELOAD
    const fetchData = async () => {
        try{
         //get the contract
         const contract = await connectingWithContract();

         //get the account by connecting wallet
         const ConnectAccount = await connectWallet();
         setAccounts(ConnectAccount); // setting it  to the current account
         
         //GET THE USERNAME
          const userName = await contract.getUsername(ConnectAccount); //getting this function from the contract
          setUsername(userName)

          // GET THE LIST OF FRIENDS
          const getFriendList = await contract.
          
        }catch(err){
            setError("Please Install and Connect your wallet!")
        }
    }

    return(
        <ChatAppContext.Provider value={{  }}>
            {children}
        </ChatAppContext.Provider>
    )
}
    