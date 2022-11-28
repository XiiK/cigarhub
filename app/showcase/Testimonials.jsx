import React from 'react'
import Image from 'next/image'
import mioPadre from 'public/img/Sh/sh3.png'

const Testimonials = () => {
  return (
    <div className='flex flex-row' id='testimonials'>
      <Image className='rounded-full m-auto w-auto h-auto' src={mioPadre} alt='logo' />
      <div class='m-auto max-w-sm rounded overflow-hidden shadow-lg'>
        <div class='px-6 py-4'>
          <div class='font-bold text-xl mb-2'>Aficionado: Physical_Usual581</div>
          <p class='text-gray-700 text-base'>
            "What’s better then pufferating on a 19 year old stogie, pufferating on a 19 Habana! Indulging on a Cohiba Habana Cuba Edición Limitada 2003 Vintage Double Corona. Impeccable Cuban tobaccos producing notes of earth, coffee, wood and leather with smooth finish!"
          </p>
        </div>
        <div class='px-6 pt-4 pb-2'>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#MioPadre</span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#Cigar</span>
          <span class='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2'>#CigarHub</span>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
