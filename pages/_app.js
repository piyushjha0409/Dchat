import '../styles/globals.css'
//INTERNAL IMPORT 
import { chatAppProvider } from '../Context/ChatAppContext';
import React, { useState, useEffect } from 'react';
import { Navbar } from '../components/index'


const [domLoaded, setDomLoaded] = useState(false);

useEffect(()=>{
  setDomLoaded(true)
}, [])
const MyApp = ({ Component, pageProps }) => 

  
  domLoaded && (
    <div>
    <chatAppProvider>
    <Navbar />
    <Component {...pageProps} />
    </chatAppProvider>
    </div>
  )
     
    


export default MyApp;

