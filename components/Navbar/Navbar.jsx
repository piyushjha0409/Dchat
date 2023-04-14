import React, {useEffect,useState, useContext} from 'react'
import Image from "next/image";
import Link from 'next/link';
import { ChatAppContext } from '../../Context/ChatAppContext';
import {Model, Error} from "../Index"

//INTERNAL IMPORT 
import Style from "./Navbar.module.css"
import images  from "../../assets"

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
  
  const {account, username, connectWallet}  = useContext(ChatAppContext) 

  return (
    <div className={Style.Navbar}>
    <div className={Style.Navbar_box}>
     <div className={Style.Navbar_box_left}>
      <Image src={images.logo} alt='logo' className={Style.logo}/>
     </div>
     <div className={Style.Navbar_box_right}>
      {/* DESKTOP  */}
     <div className={Style.Navbar_box_right_menu}>
      {menuItems.map((el, i) =>(
        <div onClick={()=> setActive(i + 1)} 
        key={i + 1} 
        className={`${Style.Navbar_box_right_menu_item} ${active == i + 1 ? Style.active_btn: ""}`}>
          <Link className={Style.Navbar_box_right_menu_items_link}
          href={el.menu}
          >{el.menu}</Link>
        </div>
      ))}
     </div>

     {/* MOBILE */}
     {open && (
       <div className={Style.mobile_menu}>
       {menuItems.map((el, i) =>(
         <div onClick={()=> setActive(i + 1)} 
         key={i + 1}
         className={`${Style.mobile_menu_item} ${active == i + 1 ? Style.active_btn: ""}`}
         >
           <Link className={Style.mobile_menu_items_link}
           href={el.menu}
           >{el.menu}
           </Link>
         </div>
       ))}

       <p className={Style.mobile_menu_btn}>
        <Image src={images.close} alt='close' width={50} height={50} onClick={()=> setOpen(false)} className=''/>
       </p>
      </div>
     )}
     {/* connect wallet button  */}
      <div className={Style.Navbar_box_right_connect}>
        {account == "" ? (
          <button onClick={()=> connectWallet()}>
            {""}
            <span>Connect Wallet</span>
            </button>
        ): (
          <button onClick={()=> setOpenModal(true)}>
            {""}
            <Image src={username ? images.accountName : images.create2} 
            alt='Acc image'
            width={20}
            height={20}
            />
            {""}
            <small>{username || "Create Account"}</small>
          </button>
        )}
      </div>
      <div
      className={Style.Navbar_box_right_open}
      onClick={()=> setOpen(true)}
      >
       <Image src={images.open} alt={open} width={30} height={30} />
      </div>
     </div>
    </div>
    </div>
  )
}

export default Navbar