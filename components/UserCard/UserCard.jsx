import React from 'react'
import Image from 'next/image'

// INTERNAL IMPORT 
import Style from "./UserCard.module.css"
import { images } from '../../assets'

const UserCard = ({ el, i, addFriends }) => {
  console.log(el)

  return (
    <div className={Style.UserCard}>
    <div className={Style.UserCard_box}>
      <Image 
      className={Style.UserCard}
      src={images[`images.${i + 1}`]}
      alt="user"
      width={100}
      height={100}
      />
    </div>
    </div>
  )
}

export default UserCard