'use client'

import React from 'react'
import { signIn } from 'next-auth/react'
const callbackUrl = process.env.NEXT_PUBLIC_SITE_URL + '/home'

const SignInComponent = ({ providers }) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button
            onClick={() => signIn(provider.id, { callbackUrl })}
            className='flex flex-row ease-in duration-300 m-auto text-gray-600 bg-gray-100 p-4 text-medium cursor-pointer hover:bg-gray-200  hover:text-white rounded-lg border-solid border-2'
          >Sign in with {provider.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default SignInComponent
