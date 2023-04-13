import React, {useEffect,useReact, useContext} from 'react'
import Image from "next/image";
import Link from 'next/link';
import { ChatAppContext } from '../../Context/ChatAppContext';
import {Model, Error} from "../Index"

//INTERNAL IMPORT 
import Style from "./Navbar.module.css"
import { images } from '../../assets';

const Navbar = () => {

  const menuItems = [
    {
      menu: "ALL USERS",
      link: "/"
    },
    {
      menu: "CHAT",
      link: "/"
    },
    {
      menu: "CONTACT",
      link: "/"
    },
    {
      menu: "SETTINGS",
      link: "/"
    },
    {
      menu: "FAQS",
      link: "/"
    },
    {
      menu: "TERMS OF USE",
      link: "/"
    },
  ]
 

  //USESTATE
  const [active, setActive] = useState(2);
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false)
  

  return (
    <div className={Style.Navbar}>
    <div className={Style.Navbar_box}>
     <div className={Style.Navbar_box_left}>
      <Image src={images.logo} alt='logo' width={50} height={50} />
     </div>
     <div className={Style.Navbar_box_right}>
      {menuItems.map((el, i) =>(
        <div onClick={()=> setActive(i + 1)} key={i + 1} className={`${Style.Navbar_box_right_menu_item} ${active == i + 1} ? Style.active_btn: ""`}></div>
      ))}
     </div>
    </div>
    </div>
  )
}

export default Navbar