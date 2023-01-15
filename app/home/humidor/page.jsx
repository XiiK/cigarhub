
import React from 'react'
import '../navbar.css'

const getCigars = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_SITE_URL + '/api/cigars')
  return res.json()
}
const PageHumidor = async () => {
  const cigars = await getCigars()

  console.log('process.env.NEXT_PUBLIC_SITE_URL', process.env.NEXT_PUBLIC_SITE_URL)
  return (
    <>
      <div id='humidor-page' className='grid grid-row-4 gap-10'>
        {cigars.brands.map((brand) => (
          <div className='bg-white rounded-lg shadow-2xl md:flex' id='card' key={brand?.brand_id}>
            <img className='rounded-t-lg md:w-1/3 md:rounded-l-lg md:rounded-t-none' src={brand?.img_logo} alt={brand?.brand_id} width={100} height={200} />
            <div className='p-6'>
              <h2 className='mb-2 font-bold text:xl md:text-2xl text-black-400'>{brand?.name}</h2>
              <h3 className='mb-2 font-bold text:xl md:text-l text-gray-500'>{brand?.date}</h3>
              <p class='text-black-100'>{brand?.history}</p>
            </div>
          </div>
        ))}
      </div>

    </>
  )
}

export default PageHumidor
