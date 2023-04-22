import React, {useState, useEffect, useContext} from 'react'
import Image from 'next/image'

//Internal Import 
import { ChatAppContext } from '../../Context/ChatAppContext'
import { Loader } from '../Index'
import images from "../../assets"
import Style from "./Model.module.css"


const Model = ({
  openBox,
  title,
  address, //this is parameter through which account will be passed
  head,
  info,
  smallinfo,
  image,
  functionName
}) => {

  //useState for name
  const [name, setName] = useState("");
  const [accountAddress, setAccountAddress] = useState("");

   const {loading} = useContext(ChatAppContext)
   
  return (
    <div className={Style.Model}>
      <div className={Style.Model_box}>
      <div className={Style.box_left}>
      <Image src={image} alt="buddy" width={700} height={700} />
      </div>
      <h1>
        {title} <span>{head}</span>
      </h1>
      <p>{info}</p>
      <small>{smallinfo}</small>

      {loading == true ? (
        <Loader />
      ): (
        <div className={Style.Model_box_right_name}>
        <div className={Style.Model_box_right_name_info}>
           <Image
            src={images.username}
            alt='user'
            width={30}
            height={30}
           />
           <input 
           type='text'
           placeholder='your name'
           onChange={(e) => setName(e.target.value)}
           />
        </div>
        <div className={Style.Model_box_right_name_btn}>
          <button onClick={() =>  functionName({ name, accountAddress})}>
            {""}
            <Image src={images.send} alt='send' width={30} height={30} />
            {""}
            Submit
          </button>

          <button onClick={()=> openBox(false)}>
          {""}
          <Image src={images.close} alt="send" width={30} height={30} />
          {""}
          Cancel
          </button>
        </div>
        </div>
       )}
      </div>

    </div>
  )
}

export default Model