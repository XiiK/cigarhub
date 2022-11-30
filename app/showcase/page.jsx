import React from 'react'
import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonials'
import FooterSh from './FooterSh'
import ContactUs from './ContactUs'

import './showcase.css'

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
