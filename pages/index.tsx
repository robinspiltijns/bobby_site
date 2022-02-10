import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/logo.svg'
import art from '../public/art.svg'

const Home: NextPage = () => {
  return (
    <div className='m-3'>
      <Image src={logo} alt={'Bobby logo'}/>
      <div className='flex flex-row'>
        <div className='flex flex-col space-y-8 w-1/3 px-11'>
          <div className='flex flex-col space-y-3'>
            <div className='text-6xl font-semibold text-white'>Freelance</div>
            <div className='text-6xl font-semibold text-purple'>Product</div>
            <div className='text-6xl font-semibold text-white'>Engineer.</div>
          </div>
          <p className='font-light'>
            Improving small businesses&apos;s    <br/>
            results through great software. <br/>
            Reach out and I will turn your  <br/>
            idea into a ready-to-go design, <br/>
            for free!
          </p>
          <div className='flex flex-col space-y-5 w-fit'>
            <button className='bg-purple border-purple border-4 px-6 py-2 rounded-xl font-semibold'>Reach out</button>
            <button className='border-purple px-6 py-2 border-4 rounded-xl text-purple font-semibold'>View services</button>
          </div>
        </div> 
        <div className='w-2/3'>
          <Image src={art} alt='cover art'/>
        </div>
      </div>
    </div>
  )
}

export default Home
