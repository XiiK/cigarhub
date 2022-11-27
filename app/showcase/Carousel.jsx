import React from 'react'

const Carousel = () => {
  return (
    <div className='flex flex-row mt-10 bg-gray-300 w-100 h-50 rounded-lg'>
      <div>
        <img className='w-fit m-auto p-5' src='https://assets-cms.thescore.com/uploads/image/file/402760/cropped_GettyImages-89119853.jpg?ts=1588683433' alt='image description' />
      </div>
      <div>
        <img className='w-fit m-auto pt-4' src='https://lh3.googleusercontent.com/ofKza7SlhQ8Xx8yrZgT8LhPBETOnQo1z8UnlFb8eIRy5ser6xGpx24MHzDRWcMucL9nun77Y_NMElIhf0edDQj9N_ja2wOz6kaU=s1500' alt='image description' />
      </div>
      <div>
        <img className='w-fit m-auto p-5' src='https://assets-cms.thescore.com/uploads/image/file/402760/cropped_GettyImages-89119853.jpg?ts=1588683433' alt='image description' />
      </div>
    </div>
  )
}

export default Carousel
