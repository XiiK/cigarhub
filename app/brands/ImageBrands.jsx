'use client'

import React from 'react'
import './imagebrands.css'

const ImageBrands = () => {
  const images = document.getElementsByClassName('img-test')

  let globalIndex = 0
  let last = { x: 0, y: 0 }

  const activate = (image, x, y) => {
    image.style.left = `${x}px`
    image.style.top = `${y}px`

    image.dataset.status = 'active'
    last = { x, y }
  }
  const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y)
  }

  window.onmousemove = (e) => {
    if (distanceFromLast(e.clientX, e.clientY) > 150) {
      const lead = images[globalIndex % images.length]
      const tail = images[(globalIndex - 5) % images.length]

      activate(lead, e.clientX, e.clientY)

      if (tail) tail.dataset.status = 'inactive'

      globalIndex++
    }
  }

  return (
    <>
      <div className='image-container'>
        <img className='img-test' src='https://media.discordapp.net/attachments/1052846184135401512/1052846368382791680/cohiba.jpg' alt='img' data-index='0' data-status='inactive' />
        <img className='img-test' src='https://media.discordapp.net/attachments/1052846184135401512/1052846369259401257/h-upmann-_546x400.jpg' alt='img' data-index='1' data-status='inactive' />
        <img className='img-test' src='https://media.discordapp.net/attachments/1052846184135401512/1052848034909782016/Hoyo-de-Monterrey-vuelta-abajo-1024x743.png' alt='img' data-index='2' data-status='inactive' />
        <img className='img-test' src='https://cdn.discordapp.com/attachments/1052846184135401512/1052848705352519680/montecristo_large.png' alt='img' data-index='3' data-status='inactive' />
        <img className='img-test' src='https://cdn.discordapp.com/attachments/1052846184135401512/1052849914381611108/partagas.png' alt='img' data-index='4' data-status='inactive' />
        <img className='img-test' src='https://cdn.discordapp.com/attachments/1052846184135401512/1052850500321685524/romeoyjulieta.jpg' alt='img' data-index='5' data-status='inactive' />
        <img className='img-test' src='https://cdn.discordapp.com/attachments/1052846184135401512/1052850777724551168/vista-bolivar.jpg' alt='img' data-index='6' data-status='inactive' />
        <img className='img-test' src='https://cdn.discordapp.com/attachments/1052846184135401512/1052851826069884938/RamonAllonespng.png' alt='img' data-index='7' data-status='inactive' />
        <img className='img-test' src='https://cdn.discordapp.com/attachments/1052846184135401512/1052855159945953330/trinidad.jpg' alt='img' data-index='8' data-status='inactive' />
        <img className='img-test' src='https://cdn.discordapp.com/attachments/1052846184135401512/1052854901581033523/Logo_Vegueros.jpg' alt='img' data-index='9' data-status='inactive' />
      </div>

    </>
  )
}

export default ImageBrands
