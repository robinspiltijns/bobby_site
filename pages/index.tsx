import type { NextPage } from 'next'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import ReachOut from '../components/reach-out'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <div className='grid place-items-center h-screen py-24'>
        <Hero/>
      </div>
      <div className='grid place-items-center h-screen'>
        <ReachOut/>
      </div>
    </div>
  )
}

export default Home
