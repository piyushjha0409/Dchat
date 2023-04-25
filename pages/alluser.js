import React  from 'react'
import { useEffect, useState, useContext } from "react"


//INTERNAL IMPORT 
import { UserCard } from '../components/Index'
import Style from "../styles/alluser.module.css"
import { ChatAppContext } from '../Context/ChatAppContext'

const alluser = () => {
  //importing the userlist and addfriends function from the context
    const {userLists, addFriend} = useContext(ChatAppContext);

  return (
    <div>
        <div className={Style.alluser}>
            <h1>Find your friends!</h1>
        </div>

        <div className={Style.alluser}>
            {userLists.map((el, i) => (
                <UserCard 
                 key={i + 1}
                 el={el}
                 i={i}
                 addFriend={addFriend}
                />
            ))}
        </div>
    </div>
  )
}

export default alluser