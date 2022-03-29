import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {useState} from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#features" onClick={() => setActiveNav('#features')} className={activeNav === '#features' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#workflow" onClick={() => setActiveNav('#workflow')} className={activeNav === '#workflow' ? 'active' : ''}><BiBook /></a>
      <a href="#testimonials" onClick={() => setActiveNav('#testimonials')} className={activeNav === '#testimonials' ? 'active' : ''}><RiServiceLine /></a>
      {/* <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a> */}
    </nav>
  )
}

export default Nav