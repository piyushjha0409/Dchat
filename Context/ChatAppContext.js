import React, {useState, useEffect} from "react";
import { useRouter } from "next/router";

//INTERNAL IMPORT 
import { checkIfWalletConnected, connectWallet, connectingWithContract } from "../utils/apiFeatures";

//created the context
export const chatAppContext = React.createContext({}); 

export const chatAppProvider = ({ children }) => {
    const title =  "Hey Welcome to the decentralized chat application!"

    return(
        <chatAppContext.Provider value={{ title }}>
            {children}
        </chatAppContext.Provider>
    )
}
    