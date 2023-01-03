
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
      <div id='humidor-page' className='grid grid-cols-4 gap-10'>
        {cigars.brands.map((brand) => (
          <div className='post' key={brand?.brand_id}>
            <h1>{brand?.name}</h1>
            <img src={brand?.img_logo} alt={brand?.brand_id} width={100} height={200} />
          </div>
        ))}
      </div>
    </>
  )
}

export default PageHumidor
