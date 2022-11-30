import React from 'react'
import { getProviders } from 'next-auth/react'
import chLogo from 'public/img/logo.png'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

const SignInPage = async () => {
  const providers = await getProviders()

  return (
    <div className=' flex flex-col justify-center'>
      <div className='m-auto'>
        <Image src={chLogo} width={200} alt='logo' priority className='m-10' />
      </div>
      <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage
