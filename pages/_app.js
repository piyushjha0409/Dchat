import '../styles/globals.css'
//INTERNAL IMPORT 
import { ChatAppProvider } from '../Context/ChatAppContext';
import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/Index'




const MyApp = ({ Component, pageProps } ) => {

const [domLoaded, setDomLoaded] = useState(false); //initialized in false 

useEffect(()=>{
  setDomLoaded(true)
}, [])

return (
  domLoaded && (
    <div>
    <Navbar />
    <ChatAppProvider>
    <Component {...pageProps} />
    </ChatAppProvider>
    </div>
  )
)
}


  
     
    


export default MyApp;

