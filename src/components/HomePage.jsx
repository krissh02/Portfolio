import React, { useEffect } from 'react'
import HeroImage from "../assets/heroImage.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaArrowDown } from "react-icons/fa6";
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import { Link } from 'react-scroll';
import Aos from 'aos';
import "aos/dist/aos.css"


const HomePage = () => {
    const [text] = useTypewriter({
        words: ['Full Stack Developer.', 'Frontend Developer.', 'Coder.'],
        loop: true,
        typeSpeed: 40,
        deleteSpeed: 40,
        delaySpeed: 2000,
      })

      useEffect(()=> {
        Aos.init();
      },[])
  return (
    <div name='about' className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>

        <div className='flex max-w-screen-xl mx-auto flex-col-reverse md:flex-row items-center justify-between  h-full md:pl-12'>

            <div className='flex flex-col justify-center items-center md:items-start h-full md:w-[90%] px-4 md:px-0'>
                <h2 className='text-2xl sm:text-6xl font-bold text-white mb-2'>Hi, I'm <span className='text-purple-400 '>Krishna Sabat</span></h2>
                <h2 className='text-xl sm:text-5xl font-semibold text-white mb-5'>a <span>{text}</span><Cursor cursorBlinking= "false" cursorColor='#c084fc' /></h2>
                {/* About me */}
                <p className='text-[13px] md:text-xl text-gray-500 w-full md:w-[63%] pl-6 md:pl-0'>Creating user-friendly apps is my passion. Just like simplifying a complicated task, I turn ideas into simple and helpful digital solutions.</p>
                <div className='flex items-center mt-6'>
                    <button className='text-sm md:text-lg group flex items-center mr-10 md:mr-14 w-fit px-3 md:px-5 py-2 md:py-3 my-2 rounded-md text-black font-semibold hover:text-white border hover:border-none bg-gray-300 hover:bg-gradient-to-r from-blue-500 to-purple-500 cursor-pointer'>
                        <Link to='contact' smooth duration={200}>Connect Me</Link>
                        {/* <span className='group-hover:rotate-90 duration-300'>
                            <MdOutlineKeyboardArrowRight size={23} className='ml-1'/>
                        </span> */}
                    </button>
                    <button className='text-sm md:text-lg group flex items-center w-fit px-3 md:px-7 py-2 md:py-3 my-2 rounded-md text-black font-semibold hover:text-white border hover:border-none bg-gray-300 hover:bg-gradient-to-r from-blue-500 to-purple-500 
                    cursor-pointer'>
                        <a href="https://drive.google.com/file/d/1OiSZNGGY64UGqG9DGg2tOHrcNBYRSWgP/view?usp=sharing" target='_blank'>Resume</a>
                        <span className='hidden group-hover:block duration-300'>
                            <FaArrowDown size={20} className='ml-2'/>
                        </span>
                    </button>
                </div>
            </div>

            {/* Image */}
            <div className=''>
                <img src={HeroImage} alt="my profile" className='shadow-md shadow-purple-400 border-[3px] rounded-full mx-auto w-[55%] md:w-full mt-[5rem] md:mt-0'  />
            </div>

        </div>



        
    </div>
  )
}

export default HomePage