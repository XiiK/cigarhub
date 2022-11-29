'use client'
import React from 'react'
import { signIn } from 'next-auth/react'
const SignInComponent = ({ providers }) => {
  return (
    <div>
      {/* {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id, {
            callbackUrl: (process.env.VERCEL_URL + '/home') || 'http://localhost:3000/home'
          })}
          >Sign in with {providers.name}
          </button>
        </div>
      ))} */}
      fane
    </div>
  )
}

export default SignInComponent
