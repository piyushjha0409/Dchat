import React, {useEffect, useState, useContext} from 'react'

//INTERNAL IMPORT 
import { chatAppContext } from '../../Context/ChatAppContext'

const chatApp = () => {
  const { title = 'Default Title' } = useContext(chatAppContext);
  return <div>{title}</div>
}

export default chatApp;