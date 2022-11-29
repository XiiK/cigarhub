import React from 'react'
import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonials'
import FooterSh from './FooterSh'
import ContactUs from './ContactUs'

import './showcase.css'

// const images = [
//   'link1',
//   'link2',
//   'link3'
// ]

const PageShowcase = () => {
  return (

    <div className='flex flex-col flex-wrap'>
      <Hero />
      <About />
      <Testimonials />
      <ContactUs />
      <FooterSh />
    </div>

  )
}

export default PageShowcase
