import React from 'react'
import {doctors} from '../assets/assets'
const Topdoctors = () => {
  return (
    <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10 max-w-6xl mx-auto'>
      <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
      <p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors.</p>

      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
        {doctors.slice(0,10).map((item , idx)=>(
          <div className='bg-white border border-blue-100 rounded-xl overflow-hidden cursor-pointer hover:-translate-y-2 transform transition-transform duration-300 shadow-sm' key={idx}>
            <img className='w-full h-44 object-cover bg-blue-50' src={item.image} alt="" />
            <div className='p-4'>
                <div className='flex items-center gap-2 text-sm text-green-500'>
                    <span className='w-2 h-2 bg-green-500 rounded-full inline-block' aria-hidden></span>
                    <span className='text-sm'>Available</span>
                </div>
                <p className='mt-2 text-lg font-medium'>{item.name}</p>
                <p className='text-sm text-gray-500'>{item.speciality}</p>

            </div>
          </div>
        ))}
      </div>

      <div className='w-full flex justify-center'>
        <button className='mt-6 px-6 py-2 bg-primary text-white rounded-full hover:opacity-90'>more</button>
      </div>
    </div>
  )
}

export default Topdoctors
