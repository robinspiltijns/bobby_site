import Image from "next/image"
import logo from '../public/logo.svg'

const NavBar = () => {
    return (
        <div className='fixed top-0 z-10 w-full flex flex-row justify-between items-center bg-dark border-b-2 border-gray px-3 lg:px-7 '>
        <Image width='90' src={logo} alt={'Bobby logo'}/>
        <button className='bg-purple border-purple border-4 px-2 py-1 rounded-md font-semibold lg:hidden text-sm'>Reach out</button>
        <div className='flex flex-row space-x-4 hidden lg:block'>
          <button className='font-semibold hover:underline'>Home</button>
          <button className='font-semibold hover:underline'>Services</button>
          <button className='font-semibold hover:underline'>Portfolio</button>
          <button className='font-semibold hover:underline'>Contact</button>
        </div>
      </div>
    )
}

export default NavBar