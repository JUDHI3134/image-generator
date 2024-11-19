import React, { useState } from 'react'
import { assets } from '../assets/assets'

const Result = () => {

  const [image, setImage] = useState(assets.sample_img_1)
  const [isImageLoaded, setIsImageLoaded] = useState(false)
  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState('')

  const onSubmitHanhler = async (e) =>{
      e.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHanhler} className='flex flex-col min-h-[90vh] justify-center items-center'>
      <div>
      <div className='relative'>
        <img src={image} alt="" className='max-w-sm rounded' />
        <span className={`h-1 absolute bottom-0 left-0 bg-blue-500 ${loading ? 'w-full transition-all duration-[10s]' : 'w-0'}`}/>
      </div>
      <p className={!loading ? "hidden" : ""}>Loading...</p>
    </div>


    {!isImageLoaded && <div className='flex w-full max-w-xl bg-neutral-600 text-white text-sm p-0.5 mt-10 rounded-full placeholder-color'>
      <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Describe what you want to generate' className='flex-1 bg-transparent outline-none ml-8 max-sm:w-20' />
      <button type="submit" className='px-10 sm:px-16 rounded-full bg-blue-600 text-white py-3'>Generate</button>
    </div>}

   {isImageLoaded && <div className='flex flex-wrap justify-center gap-2 text-white text-sm p-0.5 mt-10 rounded-full'>
      <p onClick={()=>setIsImageLoaded(false)} className='py-3 bg-transparent border border-zinc-900 text-black px-8 rounded-full cursor-pointer'>Generate Another</p>
      <a className='py-3 px-10 cursor-pointer rounded-full bg-emerald-600' download href={image}>Download</a>
    </div>}

    </form>
  )
}

export default Result
