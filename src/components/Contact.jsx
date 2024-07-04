import React, { useEffect } from 'react'
import Aos from 'aos';
import "aos/dist/aos.css"

const Contact = () => {
    useEffect(()=> {
        Aos.init();
      },[])
  return (
    <div name="contact" className='w-full md:h-screen text-white bg-gradient-to-b from-gray-800 to-black pt-[3rem] md:pt-[10rem] pb-16'>

        <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full px-12'>
            <div className='pb-8 flex justify-center items-center flex-col'>
                <p className='text-2xl md:text-4xl border-b-2 border-gray-500 font-semibold md:font-bold'>Contact</p>
                <p className='py-3 md:py-5 text-sm md:text-lg text-center'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/rbeqqdqb" method='POST' className='flex flex-col w-full md:w-1/2'>
                    <input type="text" name="name" placeholder='Enter your name' className='p-2 bg-transparent border-2 rounded-md border-purple-400 text-white focus:outline-none'/>
                    <input type="text" name="email" placeholder='Enter your email' className='my-4 p-2 bg-transparent border-2 rounded-md border-purple-400 text-white focus:outline-none'/>
                    <textarea name="message" rows="10" placeholder='Enter your message' className='p-2 bg-transparent border-2 rounded-md border-purple-400 text-white focus:outline-none'></textarea>
                    <button className='text-lg text-white border-2 bg-gradient-to-r from-blue-500 to-purple-500 px-4 md:px-6 py-1 md:py-3 flex items-center my-8 mx-auto rounded-md hover:scale-115 duration-300'>Let's talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact