import React from 'react'

const ContactUs = () => {
  return (
    <div className='' id='contactus'>
      <section className='text-gray-600 body-font relative'>
        <div className='absolute inset-0 bg-gray-300'>
          <iframe id='iframe-contact' width='100%' height='100%' title='map' src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Parma+(CigarHub)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' />
        </div>
        <div className='container px-5 py-24 mx-auto flex'>
          <div className='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
            <h2 className='text-gray-900 text-lg mb-1 font-medium title-font'>Feedback/Contact Us</h2>
            <p className='leading-relaxed mb-5 text-gray-600'>Dicci qualche consiglio per migliorare la nostra community, venite a trovarci a Parma per parlare delle nostre passioni, magari accompagnati anche da un piacevole cigaro in compagnia 😉</p>
            <div className='relative mb-4'>
              <label htmlFor='email' className='leading-7 text-sm text-gray-600'>Email</label>
              <input type='email' id='email' name='email' className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </div>
            <div className='relative mb-4'>
              <label htmlFor='message' className='leading-7 text-sm text-gray-600'>Raccontaci:</label>
              <textarea id='message' name='message' className='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out' />
            </div>
            <button className='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'>Invia</button>
            <p className='text-xs text-gray-500 mt-3'>Per organizzare un'incontro si consgilia di contattare il team di CigarHub fornendo un numero di telefono!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs
