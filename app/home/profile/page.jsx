'use client'
import React from 'react'
import { useSession, signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import defavatar from '../../../public/img/defavatar.png'
import '../navbar.css'
const PageProfile = () => {
  const { data: session } = useSession()
  const avatar = session?.user?.image || defavatar

  return (
    <>
      <div id='profile-page' className='flex flex-col space-y-5'>
        <Image className='rounded-full' src={avatar} alt='avatar' height={100} width={100} />
        <p id='myprofile-text' className='text-sm'>User:  {session?.user.name || 'UserNotFound'}</p>
        <p id='myprofile-text' className='text-sm'>Email:  {session?.user.email || 'UserNotFound'}</p>
        <div>
          <button onClick={() => signOut()}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-log-out'><path d='M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4' /><polyline points='16 17 21 12 16 7' /><line x1='21' y1='12' x2='9' y2='12' /></svg>
          </button>
          <Link className='' href='/auth/signin'>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='feather feather-log-in'><path d='M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4' /><polyline points='10 17 15 12 10 7' /><line x1='15' y1='12' x2='3' y2='12' /></svg>
          </Link>
        </div>

      </div>

    </>
  )
}

export default PageProfile
