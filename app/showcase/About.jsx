import React from 'react'
import Image from 'next/image'

import about2 from 'public/img/About/about2.png'
import about3 from 'public/img/About/about3.png'

const About = () => {
  return (
    <div className='flex flex-col' id='about'>
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-10 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image className='w-full object-cover' src={about2} alt='img' />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>DevTeam and CEOs</h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>Fane & Fede</h1>
                  <p className='leading-relaxed mb-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus eaque aut assumenda.</p>
                  <div className='flex items-center flex-wrap '>
                    <a className='text-red-500 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                      <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M5 12h14' />
                        <path d='M12 5l7 7-7 7' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image className='w-full object-cover' src={about2} alt='img' />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>True aficionados</h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>Community</h1>
                  <p className='leading-relaxed mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus suscipit consequatur.</p>
                  <div className='flex items-center flex-wrap'>
                    <a className='text-red-500 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                      <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M5 12h14' />
                        <path d='M12 5l7 7-7 7' />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className='p-4 md:w-1/3'>
              <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                <Image className='w-full object-cover' src={about3} alt='img' />
                <div className='p-6'>
                  <h2 className='tracking-widest text-xs title-font font-medium text-gray-400 mb-1'>Lorem.</h2>
                  <h1 className='title-font text-lg font-medium text-gray-900 mb-3'>The Idea</h1>
                  <p className='leading-relaxed mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti voluptatibus suscipit consequatur.</p>
                  <div className='flex items-center flex-wrap '>
                    <a className='text-red-500 inline-flex items-center md:mb-2 lg:mb-0'>Learn More
                      <svg className='w-4 h-4 ml-2' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round'>
                        <path d='M5 12h14' />
                        <path d='M12 5l7 7-7 7' />
                      </svg>
                    </a>
                    <span className='text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200'>
                      <svg className='w-4 h-4 mr-1' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'>
                        <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z' />
                        <circle cx='12' cy='12' r='3' />
                      </svg>1.2K
                    </span>
                    <span className='text-gray-400 inline-flex items-center leading-none text-sm'>
                      <svg className='w-4 h-4 mr-1' stroke='currentColor' strokeWidth='2' fill='none' strokeLinecap='round' strokeLinejoin='round' viewBox='0 0 24 24'>
                        <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z' />
                      </svg>6
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ---------------------------------------------------------------------------------------------------------- */}
      <section className='text-gray-600 body-font'>
        <div className='container px-5 py-10 mx-auto flex flex-wrap'>
          <h2 className='sm:text-3xl text-2xl text-gray-900 font-medium title-font mb-2 md:w-2/5'>CigarHub for every type of Aficionado </h2>
          <div className='md:w-3/5 md:pl-6'>
            <p className='leading-relaxed text-base'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque mollitia dolore soluta, nihil molestiae architecto! Quasi ratione officia corrupti voluptatem ipsa, eos ipsum corporis, autem, fugiat aliquam tenetur. Porro, eius.</p>

          </div>
        </div>
      </section>
    </div>
  )
}

export default About
