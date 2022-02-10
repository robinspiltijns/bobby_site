import type { NextPage } from 'next'
import Image from 'next/image'
import logo from '../public/logo.svg'

const Home: NextPage = () => {
  return (
    <div className='m-3'>
      <Image src={logo} alt={'Bobby logo'}/>
      <div className='flex flex-row'>
        <div className='flex flex-col space-y-5 w-1/3 px-11'>
          <h1 className='text-4xl font-semibold text-white'>
            Freelance <br/>
            Product   <br/>
            Engineer.  <br/>
          </h1>
          <p className='font-light'>
            Improving small businesses&apos;s    <br/>
            results through great software. <br/>
            Reach out and I will turn your  <br/>
            idea into a ready-to-go design, <br/>
            for free!
          </p>
          <button className='bg-purple border-purple border-4  p-2 rounded-xl font-semibold'>Reach out</button>
          <button className='border-purple p-2 border-4 rounded-xl text-purple font-semibold'>View services</button>
        </div> 
        <div className='w-2/3'></div>
      </div>
    </div>
  )
}

export default Home
