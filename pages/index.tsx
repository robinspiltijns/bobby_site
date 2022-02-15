import type { NextPage } from 'next'
import Image from 'next/image'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import logo from '../public/logo.svg'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <div className='grid place-items-center h-screen py-24'>
        <Hero/>
      </div>
      <div className='grid place-items-center h-screen'>
        test
      </div>
    </div>
  )
}

export default Home
