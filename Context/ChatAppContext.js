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
    const [uesrList, setUserLists] = useState([]) //empty array
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
          const friendList = await contract.getMyFriendList();
          setFriendList(friendList)
          

          //GET ALL APP USER LIST
          const userList = await contract.getAllAppUser();
          setUserLists(userList);

        }catch(error){
            setError(error)
        }
    }

    useEffect(() => {
     fetchData();
    }, [])

    //READ THE MESSAGE 
    const readMessage = async (friendAddress) => {
        try{
            //connect with contract
            const contract = await connectingWithContract();
            const read = contract.readMessage(friendAddress);
            setFriendMsg(read)
        }catch(err){
            setError("You have no chats to read!");
        }
    };

    //CREATING THE ACCOUNT
    const createAccount = async ({name, accountAddress}) => {
          try{
            // if(name || accountAddress) return setError("Name and Account are mandatory!")
           //connection with the contract
           const contract = await connectingWithContract();
           const getCreatedUser = await contract.createUser(name);
           setLoading(true); //while the user is creating we have to set the loader.
           await getCreatedUser.wait(); 
           setLoading(false)
           window.location.reload();

          }catch(err){
            setError("Error while creating the account!")
          }
    };

    //ADD FRIENDS
    const addFriends = async ({name, accountAddress}) =>{
     try{
        // if(name || accountAddress) return setError("Both are required!")

        //connection with the contract
        const contract = await connectionWithContract();
        const addMyfriend = await contract.addFriend(accountAddress, name);
        setLoading(true);
        await addMyfriend.wait();
        setLoading(false);
        //redirect to the homepage
        router.push("/");
        window.location.reload();

     }catch(err){
        setError("Error Occurred while adding a friend!")
     }

    };
    
    //SEND MESSAGE FUNCTION 
    const sendMessage = async ({address, msg}) =>{
        try{
           if(address || msg) return setError("Please provide message and address!");

           //connecting with the contract 
           const contract = await connectingWithContract();
           const adddMessage = await contract.sendMessage(address, msg);
           setLoading(true);
           await adddMessage.wait();
           setLoading(false);
           window.location.reload();

        }catch(err){
            setError("Error Occured while sending the message!")
        }
    };

    //READ THE USER INFO
    const readUser = async (userAddress) => {
       //connecting with contract
       const contract = await connectingWithContract();
       const username = await contract.getUseranme(userAddress);
       setCurrentUsername(username); //setting the current username
       setCurrentAddress(userAddress); //setting the current user address
    };

    return(
        <ChatAppContext.Provider value={{ 
            readMessage,
            createAccount,
            addFriends,
            sendMessage,
            readUser,
            connectWallet,
            checkIfWalletConnected,
            accounts,
            username,
            friendLists,
            friendMsg,
            uesrList
             }}>
            {children}
        </ChatAppContext.Provider>
    )
}
    