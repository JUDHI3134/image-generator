import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion} from "framer-motion"
import { AppContext } from '../context/AppContext'

const Header = () => {

  const {user, setShowLogin, navigate} = useContext(AppContext)

  const onClickHandler = () =>{
     if(user){
      navigate("/result")
     }else{
      setShowLogin(true)
     }
  }

  return (
    <motion.div className='flex flex-col justify-center items-center my-20 text-center'
    initial={{opacity: 0.2, y: 100}}
    transition={{duration: 1}}
    whileInView={{opacity:1, y:0}}
    viewport={{once: true}}
    >
      <motion.div className='inline-flex text-stone-500 text-center gap-2 bg-white px-6 py-1 rounded-full border  border-neutral-500'
      initial={{opacity: 0, y: -20}}
      animate={{opacity:1, y:0}}
      viewport={{once: true}}
      transition={{delay : 0.2,duration: 0.8}}
      >
        <p>Convert Any Text To Image</p>
        {/* <img src={assets.star_icon} alt="" /> */}
      </motion.div>

      <motion.h1 className='text-4xl max-w-[300px] sm:text-7xl sm:max-w-[590px] mx-auto mt-10 text-center'
      initial={{opacity: 0}}
      animate={{opacity:1}}
      transition={{delay : 0.4,duration: 2}}
      >Generate your <span className='text-blue-500'>Image</span> using Text. </motion.h1>

      <motion.p className='text-center max-w-xl mx-auto mt-5'
      initial={{opacity: 0, y: 20}}
      animate={{opacity:1, y:0}}
      transition={{delay : 0.6,duration: 0.8}}
      >Unless your creativity with AI. Turn your Imagination to Visual art in second.Just type and watch the magic happen</motion.p>

      <motion.button onClick={onClickHandler} className='flex sm:text-lg text-white bg-emerald-600 w-auto mt-8 px-12 py-2.5 items-center gap-2 rounded-full'
      whileHover={{scale: 1.05}}
      whileTap={{scale:0.95}}
      initial={{opacity: 0}}
      animate={{opacity:1}}
      transition={{default: {duration: 0.5},opacity: {delay: 0.8, duration: 1}}}
      >Generate Image 
      <img className='h-6' src={assets.star_group} alt="" />
      </motion.button>

      <motion.div className='flex flex-wrap justify-center mt-16 gap-3'
      initial={{opacity: 0}}
      animate={{opacity:1}}
      transition={{delay : 1,duration: 1}}
      >
        {
          Array(6).fill('').map((item,index)=>(
            <motion.img
            whileHover={{scale: 1.05, duration: 0.1}}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer max-sm:w-10' src={index % 2 === 0 ? assets.sample_img_2 : assets.sample_img_1} 
            key={index} width={70} alt="" />
          ))
        }
      </motion.div>
      <motion.p className='text-neutral-700 mt-2'
       initial={{opacity: 0}}
       animate={{opacity:1}}
       transition={{delay : 1.2,duration: 0.8}}
      >Generate image form Text</motion.p>

    </motion.div>
  )
}

export default Header
