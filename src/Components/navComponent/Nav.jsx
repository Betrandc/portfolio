import './Nav.css'
import {AiOutlineHome,AiOutlineUser,AiFillMessage}from 'react-icons/ai'
import {BiBook}from 'react-icons/bi'
import {RiServiceLine}from 'react-icons/ri'
import { useState } from 'react'
export const Nav = () => {

  const [isActive, setIsActive] =useState("#")
  return (
   <nav className='nav-mobile'>
    <div>
   
      <AiOutlineHome className='Icons'/>
    <br/>
    <a href="#" >
    <p onClick={()=>setIsActive("#")} className={isActive==="#"? "active":""}>Home</p>
    </a>
    </div>
    <div>
    
      <AiOutlineUser className='Icons'/>
      <br/>
      <a href="#about" >
     <p onClick={()=>setIsActive("#about")} className={isActive==="#about"?  "active":""} >About</p>
     </a>
    </div>
    <div>
    
      <BiBook className='Icons_experience'/>
      <br/>
      <a href="#experience"  >
      <p onClick={()=>setIsActive("#experience")} className={isActive==="#experience"?  "active":""}>Experience</p>
      </a>
    </div>
    <div>
    
      <RiServiceLine className='Icons_'/>
      <br/>
      <a href="#services" >
      <p onClick={()=>setIsActive("#services")} className={isActive==="#services"?"active":""}>Services</p></a>
    </div>
    <div>
    <AiFillMessage className='Icons' /><br/>
    <a href="#contact"   >
    <p onClick={()=>setIsActive("#contact")}className={isActive==="#contact"?  "active":""}>Contact</p>
      </a>
     
    </div>
    
   </nav>
  )
}
