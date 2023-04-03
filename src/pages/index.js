import React, {useEffect, useState, useContext} from 'react'

//INTERNAL IMPORT 
import { chatAppContext } from '../../Context/ChatAppContext'

const chatApp = () => {
  const {title} = useContect(chatAppContext)
  return <div>{title}</div>
}