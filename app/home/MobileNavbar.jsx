'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/img/logo.png'

const MobileNavbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div id='mobile-navbar'>
      <div>
        <Image id='logo' src={logo} width='auto' height='auto' alt='logo' />
      </div>
      <div>
        {open &&
          <ul id='nav' className={open ? 'nav active' : 'nav'}>
            <li><Link onClick={() => setOpen(!open)} href='/home'>Home</Link></li>
            <li><Link onClick={() => setOpen(!open)} href='/home/humidor'>Humidor</Link></li>
            <li><Link onClick={() => setOpen(!open)} href='/home/friends'>Friends</Link></li>
            <li><Link onClick={() => setOpen(!open)} href='/home/profile'>Profile</Link></li>
          </ul>}
      </div>
      <div className={open ? 'menu active' : 'menu'} id='menu2' onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default MobileNavbar
