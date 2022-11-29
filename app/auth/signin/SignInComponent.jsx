'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
const callbackUrl = process.env.NEXTAUTH_URL || process.env.NEXT_PUBLIC_NEXTAUTH_URL + '/home'

const SignInComponent = ({ providers }) => {
  return (
    <div>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, { callbackUrl })}>Sign in with {providers.name}
          </button>
        </div>
      ))}
    </div>
  )
}

export default SignInComponent
