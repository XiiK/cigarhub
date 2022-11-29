import React from 'react'

const ContactUs = () => {
  return (
    <div id='contactus'>
      <section class='text-gray-600 body-font relative'>
        <div class='absolute inset-0 bg-gray-300'>
          <iframe id='iframe-contact' width='100%' height='100%' frameborder='0' title='map' src='https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Parma+(CigarHub)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed' />
        </div>
        <div class='container px-5 py-24 mx-auto flex'>
          <div class='lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md'>
            <h2 class='text-gray-900 text-lg mb-1 font-medium title-font'>Feedback</h2>
            <p class='leading-relaxed mb-5 text-gray-600'>Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <div class='relative mb-4'>
              <label for='email' class='leading-7 text-sm text-gray-600'>Email</label>
              <input type='email' id='email' name='email' class='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out' />
            </div>
            <div class='relative mb-4'>
              <label for='message' class='leading-7 text-sm text-gray-600'>Message</label>
              <textarea id='message' name='message' class='w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out' />
            </div>
            <button class='text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg'>Button</button>
            <p class='text-xs text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, nam!</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactUs