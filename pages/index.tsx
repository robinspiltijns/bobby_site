import type { NextPage } from 'next'
import Hero from '../components/hero'
import NavBar from '../components/navbar'
import ReachOut from '../components/reach-out'

const Home: NextPage = () => {
  return (
    <div>
      <NavBar/>
      <div className='py-24 lg:h-screen lg:grid lg:place-items-center'>
        <Hero/>
      </div>
      <div className='pb-24 lg:mx-auto lg:max-w-lg'>
        <ReachOut/>
      </div>
    </div>
  )
}

export default Home
