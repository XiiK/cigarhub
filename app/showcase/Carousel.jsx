import React from 'react'

const Carousel = props => {
  const { images } = props
  return (
    <div className='flex flex-row mt-10 bg-gray-300 w-100 h-50 rounded-lg'>
      {images.map((image, i) => (
        <div key={i}>
          <img className='w-fit m-auto p-5' src={images[i]} alt='image description' />
        </div>
      ))}
    </div>
  )
}

export default Carousel
