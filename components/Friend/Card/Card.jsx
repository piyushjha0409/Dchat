import React from 'react'
import Image from 'next/image'

//INTERNAL IMPORT 
import Style from "./Card.module.css"
import { ChatAppContext } from '../../../Context/ChatAppContext'
import images from "../../../assets"
import Link from 'next/link'

const Card = ({ readMessage, el , i, readUser}) => {
  console.log(el);
  return (
    <Link
    href={{pathname: "/",
   query: {name:`${el.name}`, address:`${el.pubkey}`}}}
    >
     
    <div>
        
    </div>
    </Link>
  )
}

export default Card