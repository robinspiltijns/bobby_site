import Image from "next/image"
import art from '../public/art.svg'

const Hero = () => {
    return (
        <div className='flex flex-row space-x-20 px-6'>
            <div className='flex flex-col space-y-9'>
                <div className='flex flex-col space-y-3'>
                    <div className='text-6xl font-semibold text-white'>Freelance</div>
                    <div className='text-6xl font-semibold text-purple'>Product</div>
                    <div className='text-6xl font-semibold text-white'>Engineer.</div>
                </div>
                <p className='font-light text-lg lg:text-base break-words'>
                    Improving small businesses&apos;s   <br/>
                    results through great software.     <br/>
                    Reach out and I will turn your      <br/>
                    idea into a ready-to-go design,     <br/>
                    for free!
                </p>
                <div className='flex flex-col space-y-3 w-full '>
                    <button className='bg-purple border-purple border-4 px-6 py-2 rounded-xl font-semibold'>Reach out</button>
                    <button className='border-purple px-6 py-2 border-4 rounded-xl text-purple font-semibold'>View services</button>
                </div>
            </div>
            <div className='imageContainer hidden lg:block'>
                <Image height='100%' src={art} alt="Bobby cover art" />
            </div>
        </div>
    )
}

export default Hero