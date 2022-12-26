'use client'
import React from 'react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import defavatar from '../../../public/img/defavatar.png'
const PageProfile = () => {
  const { data: session } = useSession()
  const avatar = session?.user?.image || defavatar

  return (
    <>
      <div className='flex flex-col'>
        <Image className='rounded-full' src={avatar} alt='avatar' height={100} width={100} />
        <p id='myprofile-text' className='text-sm'>User:  {session?.user.name || 'UserNotFound'}</p>
        <p id='myprofile-text' className='text-sm'>Email:  {session?.user.email || 'UserNotFound'}</p>
      </div>
    </>
  )
}

export default PageProfile
