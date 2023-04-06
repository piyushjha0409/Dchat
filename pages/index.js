import React, {useEffect, useState, useContext} from 'react'

//INTERNAL IMPORT 
import { ChatAppContext } from '../Context/ChatAppContext';


const chatApp = () => {
  const {title} = useContext(ChatAppContext);
  return <div>{title}</div>
};

export default chatApp;