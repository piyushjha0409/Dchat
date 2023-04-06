import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT 
import { checkIfWalletConnected, connectWallet, connectingWithContract } from "../utils/apiFeatures";

//created the context
export const ChatAppContext = React.createContext({}); 

export const ChatAppProvider = ({ children }) => {
    const title =  "Hey Welcome to the decentralized chat application!"

    return(
        <ChatAppContext.Provider value={{ title }}>
            {children}
        </ChatAppContext.Provider>
    )
}
    