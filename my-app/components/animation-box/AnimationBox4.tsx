'use client'

import {motion} from 'framer-motion'

import {RxChevronDown} from 'react-icons/rx'
import { Button } from '../ui/button'
const AnimationBox4 = () => {

  const iconBox = `flex aspect-square md:aspect-auto md:my-4 items-center justify-center text-slate-500`;

  return (
    <motion.div

      className=' text-center flex w-full flex-col relative text-5xl font-extrabold'
    >
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 5, delay: 4 }}
          className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-cyan-500 to-violet-500">
          Hello world
        </motion.div>
    </motion.div>
  )
}

export default AnimationBox4;