import React from 'react'
import { getProviders } from 'next-auth/react'
import chLogo from 'public/img/logo.png'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

const SignInPage = async () => {
  const providers = await getProviders()

  return (
    <div className='flex justify-center'>
      <div>
        <Image src={chLogo} width={300} alt='logo' />
      </div>
      <SignInComponent providers={providers} />
    </div>
  )
}

export default SignInPage
