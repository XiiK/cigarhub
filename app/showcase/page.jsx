import React from 'react'

const showcase = () => {
  return (
    <>

      {/* logo e login */}
      <div className='flex flex-row text-3xl p-4'><div className='m-auto'>Logo CigarHub</div><div className='m-auto'>Login</div></div>
      {/* descrizione della vetrina */}
      <div className='border-black rounded-lg p-20'>
        <p className='text-2xl'>Il Social Network per gli amanti del tabacco cubano</p>
        <p className='mt-4'>Condividi con il mondo la tua passione e fai amicizia </p>
        <div className='bg-gray-300 border-black  border-1 rounded-full p-3 mt-5 w-40'>Registrati subito!</div>
        {/* carosello con immagini */}
        <div className='flex flex-row mt-10 bg-gray-300 w-100 h-50 rounded-lg'>
          <div><img className='w-fit m-auto p-5' src='https://assets-cms.thescore.com/uploads/image/file/402760/cropped_GettyImages-89119853.jpg?ts=1588683433' alt='image description' /></div>
          <div><img className='w-fit m-auto pt-4' src='https://lh3.googleusercontent.com/ofKza7SlhQ8Xx8yrZgT8LhPBETOnQo1z8UnlFb8eIRy5ser6xGpx24MHzDRWcMucL9nun77Y_NMElIhf0edDQj9N_ja2wOz6kaU=s1500' alt='image description' /></div>
          <div><img className='w-fit m-auto p-5' src='https://assets-cms.thescore.com/uploads/image/file/402760/cropped_GettyImages-89119853.jpg?ts=1588683433' alt='image description' /></div>
        </div>
        <p>Qui dovrò fare un carosello decente in automatico e migliorare la grafica ~Fede </p>
      </div>
      {/* copyright */}
      <div className='flex flex-row'><div className='m-auto'>© 2022 CigarHubTeam</div><div className='m-auto'>Privacy Policy</div></div>
    </>

  )
}

export default showcase
