'use client'

import {motion} from 'framer-motion'
import CountUp from 'react-countup';
import { twMerge } from 'tailwind-merge'

const AnimationBox2 = () => {

  const newStyle = `px-4 text-center`
  const iconBox = `flex aspect-square md:aspect-auto md:my-4 justify-center text-slate-500`;
  const countUpTextSizeColor = `font-bold text-3xl w-auto flex justify-center items-center`
  return (
    <motion.div
    initial = {{opacity: 0.4, left: '0px', top: '50px'}}
    whileInView = {{ opacity: 1, left: '0px', top: '0px'}}
    transition = {{ duration: 0.3 , delay: 0.2, type: "spring", stiffness: '50'}}
      viewport = {{ once: false }}
      className='
        flex w-full relative'
    >
      <section className='grid grid-cols-3 w-full'>
        <span className={iconBox}>
        <CountUp 
          start={30}
          className={twMerge(countUpTextSizeColor, newStyle)}
          duration={3}
          end={136} />
        </span>
        <span className={iconBox}>
        <CountUp 
          suffix='+'
          className={countUpTextSizeColor}
          duration={2.75}
          start={1440}
          end={3336} />
        </span>
        <span className={iconBox}>
          <CountUp 
          suffix='%'
          className={countUpTextSizeColor}
          duration={2.55}
          start={122}
          end={336} />
        </span>
      </section>
    </motion.div>
  )
}

export default AnimationBox2;