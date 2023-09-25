'use client'
import {RxOpenInNewWindow, RxUpdate, RxGlobe} from 'react-icons/rx'
import {motion} from 'framer-motion'

export interface AnimationBoxProps {
    children: React.FC;
}
const AnimationBox1:React.FC = () => {

  const iconBox = `flex aspect-square md:aspect-auto items-center justify-center text-slate-500`;

  return (
    <motion.div
    initial = {{opacity: 0.4, left: '0px', top: '50px'}}
    whileInView = {{ opacity: 1, left: '0px', top: '0px'}}
    transition = {{ duration: 0.3 , delay: 0.1, type: "spring", stiffness: '50'}}
      viewport = {{ once: false }}
      className='
        flex w-full relative'
    >
      <section className='grid grid-cols-3 w-full'>
        <span className={iconBox}>
          <RxOpenInNewWindow
            size={64} />
        </span>
        <span className={iconBox}>
          <RxUpdate size={64} />
        </span>
        <span className={iconBox}>
          <RxGlobe size={64} />
        </span>
      </section>
      
    </motion.div>
  )
}

export default AnimationBox1;