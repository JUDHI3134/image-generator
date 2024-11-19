import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col justify-center items-center my-20 text-center'>
      <div className='inline-flex text-stone-500 text-center gap-2 bg-white px-6 py-1 rounded-full border  border-neutral-500'>
        <p>Convert Any Text To Image</p>
        {/* <img src={assets.star_icon} alt="" /> */}
      </div>
      <h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'>Generate your <span className='text-blue-500'>Image</span> using Text. </h1>

      <p className='text-center max-w-xl mx-auto mt-5'>Unless your creativity with AI. Turn your Imagination to Visual art in second.Just type and watch the magic happen</p>

      <button className='flex sm:text-lg text-white bg-emerald-600 w-auto mt-8 px-12 py-2.5 items-center gap-2 rounded-full'>Generate Image 
      <img className='h-6' src={assets.star_group} alt="" />
      </button>

      <div className='flex flex-wrap justify-center mt-16 gap-3'>
        {
          Array(6).fill('').map((item,index)=>(
            <img className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
            key={index} width={70} alt="" />
          ))
        }
      </div>
      <p className='text-neutral-700 mt-2'>Generate image form Text</p>

    </div>
  )
}

export default Header
