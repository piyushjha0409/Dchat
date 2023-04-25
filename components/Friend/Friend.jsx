import React, { useContext } from 'react'
import Image from 'next/image'

//INTERNAL IMPORT 
import Style from "./Friend.module.css"
import images  from '../../assets'
import Card from './Card/Card'
import Chat from './Chat/Chat'
import { ChatAppContext } from '../../Context/ChatAppContext'

const Friend = () => {

    const {
         readMessage,
         account,
         userName,
         sendMessage,
         friendList,
         friendMsg,
         loading

    }  = useContext(ChatAppContext);
  return (
    <div className={Style.Friend}>
      <div className={Style.Friend_box}>
        <div className={Style.Friend_box_left}>
            {friendList.map((el, i) => (
                <Card 
                  key={i + 1}
                  el = {el}
                  i = {i}
                  readMessage = {readMessage}
                  readUser = {readUser}
                />
            ))}
        </div>
        <div className={Style.Friend_box_right}>
         <Chat 
           
         />
        </div>
      </div>
    </div>
  )
}

export default Friend