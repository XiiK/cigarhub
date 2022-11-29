import React from 'react'
import { getProviders } from 'next-auth/react'
import chLogo from 'public/img/logo.png'
import logogoogle from 'public/img/logogoogle.png'
import Image from 'next/image'
import SignInComponent from './SignInComponent'

const SignInPage = async () => {
  const providers = await getProviders()

  return (
    <div className=' flex flex-col justify-center'>
      <div className='m-auto'>
        <Image src={chLogo} width={300} alt='logo' />
      </div>
      <div className='flex flex-row ease-in duration-300 m-auto text-gray-600 bg-gray-100 p-4 text-medium cursor-pointer hover:bg-gray-200  hover:text-blue-300 rounded-lg border-solid border-2'>
        <SignInComponent providers={providers} />
        <div className='ml-2'>
          <Image src={logogoogle} width={20} />
        </div>
      </div>

    </div>
  )
}

export default SignInPage
