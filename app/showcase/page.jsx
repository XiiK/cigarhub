import React from 'react'
import NavbarSh from './NavbarSh'
import Hero from './Hero'
import About from './About'
import Testimonials from './Testimonials'
import FooterSh from './FooterSh'

import './showcase.css'

// const images = [
//   'link1',
//   'link2',
//   'link3'
// ]

const PageShowcase = () => {
  return (
    <>
      <NavbarSh />
      <Hero />
      <About />
      <Testimonials />
      <FooterSh />
    </>

  )
}

export default PageShowcase
