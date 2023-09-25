import AnimationBox1 from '@/components/animation-box/AnimationBox'
import AnimationBox2 from '@/components/animation-box/AnimationBox2'
import AnimationBox3 from '@/components/animation-box/AnimationBox3'
import AnimationBox4 from '@/components/animation-box/AnimationBox4'
import BgShadowBottom from '@/components/BgShadow/BgShadowBottom'
import BgShadowTop from '@/components/BgShadow/BgShadowTop'

import Link from 'next/link';

export default function Home() {

  const navlink = `flex items-center justify-center px-2 py-1 rounded-md text-slate-400 font-semibold`
  return (
    <main className="min-h-screen w-full relative ">
      <BgShadowTop />
      <span className='flex bg-transparent w-full items-center justify-center'>
        <nav className='flex gap-4 mx-3 my-4 rounded-lg p-2 shadow-md bg-white justify-between md:justify-start w-full'>
          <span className={navlink}>
            <Link href='login'>Login</Link>
          </span>
          <span className={navlink}>
            <Link href='login'>Register</Link>
          </span>
          <span className={navlink}>
            <Link href='login'>Logout</Link>
          </span>
        </nav>
      </span>
      <span className='grid grid-cols-1 max-w-[660px] mx-auto mt-8'>
        {/* logos */}
        <AnimationBox1 />
        {/* counter */}
        <AnimationBox2 />
        {/* subtext */}
        <AnimationBox3 />
        {/* buttons */}
        {/* <AnimationBox4 /> */}
      </span>
      {/* <span>
        <p className='p-4 text-slate-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam temporibus ducimus tenetur quasi nihil atque reiciendis libero sint! Eos commodi rem totam expedita doloribus libero voluptatibus perspiciatis optio sint distinctio.</p>
      </span> */}

      <BgShadowBottom />

    </main>
  )
}


