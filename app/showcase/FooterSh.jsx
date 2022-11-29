'use client'

import React from 'react'
import logoHero from 'public/img/logo.png'
import Image from 'next/image'
const FooterSh = () => {
  function ClickHome (e) {
    e.preventDefault()
    document.getElementById('hero').scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='sm:text-3xl text-3xl font-medium text-center title-font text-gray-900 mb-4'>The specifications CigarHub offers:</h1>
          </div>
          <div className='flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2'>
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-red-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </svg>
                <span className='title-font font-medium'>All the most famous Cigar Brands</span>
              </div>
            </div>
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-red-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </svg>
                <span className='title-font font-medium'>Fast API response</span>
              </div>
            </div>
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-red-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </svg>
                <span className='title-font font-medium'>Cigar specifications</span>
              </div>
            </div>
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-red-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </svg>
                <span className='title-font font-medium'>Community of experts</span>
              </div>
            </div>
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-red-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </svg>
                <span className='title-font font-medium'>Online</span>
              </div>
            </div>
            <div className='p-2 sm:w-1/2 w-full'>
              <div className='bg-gray-100 rounded flex p-4 h-full items-center'>
                <svg fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='3' className='text-red-500 w-6 h-6 flex-shrink-0 mr-4' viewBox='0 0 24 24'>
                  <path d='M22 11.08V12a10 10 0 11-5.93-9.14' />
                  <path d='M22 4L12 14.01l-3-3' />
                </svg>
                <span className='title-font font-medium'>Aficionado Friends</span>
              </div>
            </div>
          </div>
          <button className='flex mt-5 mx-auto text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg' onClick={ClickHome}>Return to Top</button>
        </div>
      </section>
      {/* footer con il copyright */}
      <footer id='footer-copyright' className='text-gray-600 body-font'>
        <div className='container px-5 py-1 mx-auto flex items-center sm:flex-row flex-col'>
          <a className='flex title-font font-medium items-center md:justify-start justify-center text-gray-900'>
            <Image className='lg:h-20 md:h-17 w-full object-cover' src={logoHero} alt='img' />
            <span className='ml-3 text-xl'>CigarHub</span>
          </a>
          <p className='text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4'>© 2022 CigarHub —
            <a href='https://twitter.com/Feetrikki' className='text-gray-600 ml-1' rel='noopener noreferrer' target='_blank'>@fedeee </a>
            <a href='https://twitter.com/fanethemachine' className='text-gray-600 ml-1' rel='noopener noreferrer' target='_blank'>@fane </a>
          </p>
          <span className='inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start'>
            <a className='ml-3 text-gray-500'>
              <svg fill='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' className='w-5 h-5' viewBox='0 0 24 24'>
                <path d='M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' />
              </svg>
            </a>
            <a className='ml-3 text-gray-500'>
              <svg fill='currentColor' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='0' className='w-5 h-5' viewBox='0 0 24 24'>
                <path stroke='none' d='M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' />
                <circle cx='4' cy='4' r='2' stroke='none' />
              </svg>
            </a>
          </span>
        </div>
      </footer>
    </>
  )
}

export default FooterSh
