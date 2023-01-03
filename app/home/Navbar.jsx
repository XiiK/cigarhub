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
      <div id='navbar-top' className=''>
        <Link href='/home'>
          <Image id='logo' src={logo} width='auto' height='auto' alt='logo' priority />
        </Link>
        <button onClick={() => signOut()}>
          <a className='inline-block'>
            Out <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-log-out'><path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' /><polyline points='16 17 21 12 16 7' /><line x1='21' y1='12' x2='9' y2='12' /></svg>
          </a>
        </button>
        <Link className='inline-block' href='/auth/signin'>
          In <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-log-in'><path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' /><polyline points='10 17 15 12 10 7' /><line x1='15' y1='12' x2='3' y2='12' /></svg>
        </Link>
      </div>
      <div id='navbar-middle' className='text-lg'>
        <div id='itemMid'><Link href='/home'>Home</Link></div>
        <div id='itemMid'><Link href='/home/humidor'>Humidor</Link></div>
        <div id='itemMid'> <Link href='/home/friends'>Friends</Link></div>
      </div>
      <Link href='/home/profile' id='profile-wrapper'>
        <Image className='rounded-full' src={avatar} alt='avatar' height={50} width={50} />
        <div id='profile-text' className='text-sm'> {session?.user.name || 'UsernameUsernameUsernameUsername'}</div>
      </Link>
    </div>
  )
}

export default Navbar
