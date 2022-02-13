import Image from "next/image"
import { useState } from "react"
import logo from '../public/logo.svg'

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const onMenuClick = () => {setMenuOpen(!menuOpen)}
  return (
    <div className="fixed top-0 z-10 w-full">
      <div className='w-full flex flex-row justify-between items-center bg-dark border-b-2 border-gray px-3 lg:px-7 '>
        <Image width='90' src={logo} alt={'Bobby logo'} />
        <div onClick={onMenuClick} className="space-y-2 lg:hidden">
          <div className="w-8 h-1 bg-white rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
          <div className="w-8 h-1 bg-white rounded"></div>
        </div>
        <div className='flex flex-row space-x-4 hidden lg:block'>
          <button className='font-semibold hover:underline'>Home</button>
          <button className='font-semibold hover:underline'>Contact</button>
        </div>
      </div>
      {menuOpen ?
        <div className="flex flex-col w-full items-center z-10 bg-dark lg:hidden">
          <div className="w-full py-5 flex flex-row justify-center border-b-2 border-gray">
            <button className='font-semibold hover:underline'>Home</button>
          </div>
          <div className="w-full py-5 flex flex-row justify-center border-b-2 border-gray">
            <button className='font-semibold hover:underline'>Contact</button>
          </div>
        </div>
        :
        null
      }
    </div>

  )
}

export default NavBar