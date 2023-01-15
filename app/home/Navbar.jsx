'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../../public/img/logo.png'
import defavatar from '../../public/img/defavatar.png'
const Navbar = () => {
  const { data: session } = useSession()
  const avatar = session?.user?.image || defavatar

  return (
    <div id='navbar'>
      <div id='navbar-top' className='flex justify-center'>
        <Link href='/home'>
          <Image id='logo' src={logo} width='auto' height='auto' alt='logo' priority />
        </Link>
      </div>
      <div id='navbar-middle' className='text-lg'>
        <div id='itemMid'><Link href='/home'>Home</Link></div>
        <div id='itemMid'><Link href='/home/humidor'>Humidor</Link></div>
      </div>
      <Link href='/home/profile' id='profile-wrapper' className='bg-red-200 rounded-full py-2 px-4'>
        <Image className='rounded-full' src={avatar} alt='avatar' height={50} width={50} />
        <div id='profile-text' className='text-sm'> {session?.user.name || 'UsernameUsernameUsernameUsername'}</div>
      </Link>
    </div>
  )
}

export default Navbar
