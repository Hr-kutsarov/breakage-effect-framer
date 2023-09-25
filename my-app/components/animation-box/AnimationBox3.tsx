'use client'

import {motion} from 'framer-motion'

import {RxArrowDown} from 'react-icons/rx'

const AnimationBox3 = () => {

  const iconBox = `flex items-center justify-center text-slate-500`;
  const textStyles = `text-center text-sm font-semibold tracking-wide px-4`
  return (
    <motion.div
    initial = {{opacity: 0.4, left: '0px', top: '50px'}}
    whileInView = {{ opacity: 1, left: '0px', top: '0px'}}
    transition = {{ duration: 0.3 , delay: 0.4, type: "spring", stiffness: '50'}}
      viewport = {{ once: false }}
      className='
        flex w-full relative'
    >
      <section className='grid grid-cols-3 w-full'>
        <span className={iconBox}>
          <p className={textStyles}>
            months in business
          </p>
        </span>
        <span className={iconBox}>
          <p className={textStyles}>
            resolved issues
          </p>
        </span>
        <span className={iconBox}>
          <p className={textStyles}>
            happy customers
          </p>
        </span>
      </section>
      
    </motion.div>
  )
}

export default AnimationBox3;