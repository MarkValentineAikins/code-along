import React from 'react'

function Contact() {
  return (
    /* <div className='flex flex-col md:flex-row'>
      <div className='bg-green-200 w-80 p-4 px-4 py-2 h-80'>left</div>
      <div className='bg-red-400 w-80 p-4 px-4 py-2 h-80'>right</div>

    </div> */

    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-wrap'>


      <div className='box'>left</div>
      <div className='box1'>right</div>

      <div className='box3'>top</div>
      <div className='box2'>down</div>

    </div>
  )
}

export default Contact;
