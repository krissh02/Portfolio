import React, { useEffect } from 'react'
import ecommerce from '../assets/portfolio/ecommerce.jpg'
import netflix from '../assets/portfolio/netflix.jpg'
import youtube from '../assets/portfolio/youtube.jpg'
import food from '../assets/portfolio/food.jpg'
import golf from '../assets/portfolio/golf.jpg'
import Aos from 'aos';
import "aos/dist/aos.css"
import { FaLink } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";


const Projects = () => {
    const projects = [
        {
            id: 1,
            src: ecommerce,
            url: "https://ecommerce-mern-frontend-seven.vercel.app/",
            code: "https://github.com/krissh02/Ecommerce-MERN",
            name: "Ecommerce App",
            des: "Build a ecommerce application with product management and seamless Stripe integration for a smooth and engaging shopping experience."
        },
        {
            id: 2,
            src: netflix,
            url: "https://netflix-gpt-sand-seven.vercel.app/",
            code: "https://github.com/krissh02/NetflixGPT",
            name: "Netflix",
            des: "Build a Netflix clone featuring secure Firebase authentication movie and series exploration for an engaging and user-friendly streaming experience."
        },
        {
            id: 3,
            src: youtube,
            url: "https://youtube-clone-ten-iota-72.vercel.app/",
            code: "https://github.com/krissh02/Youtube-Clone",
            name: "Youtube",
            des: "Build a dynamic video platform with debounced, cached search using the YouTube API, detailed video information, and an integrated chat feature for a community-driven experience."
        },
        {
            id: 4,
            src: food,
            url: "https://ultimate-food.vercel.app/",
            code: "https://github.com/krissh02/Namaste-React",
            name: "Food Ordering App",
            des: "Build a restaurant app with powerful search, detailed restaurant information, and comprehensive cart management for a smooth and efficient ordering process."
        },
        {
            id: 5,
            src: golf,
            url: "https://sidcup-golf-1234.netlify.app/",
            code: "https://github.com/krissh02/Sidcup-golf-website-clone",
            name: "Golf App",
            des: "Build a golf website featuring extensive animations for an engaging and visually dynamic user experience."
        },
    ]

    useEffect(()=> {
        Aos.init();
      },[])
  return (
    <div name="projects" className='w-full md:h-screen text-white bg-gradient-to-b from-black to-gray-800 pt-[35rem] 
    md:pt-[0rem]'>

        <div className='max-w-screen-xl p-4 mx-auto flex flex-col justify-center w-full h-full px-12'>

            <div className='pb-8 flex justify-center items-center flex-col'>
                <p className='text-4xl font-bold border-b-4 border-gray-500'>Projects</p>
                {/* <p className='py-6'>Check out some of my work right here</p> */}
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:px-8'>

                {
                    projects.map(({id,src,url,code,name,des})=> (
                        <div key={id} className='shadow-md shadow-purple-600 rounded-lg group relative overflow-hidden w-[105%] h-[110%] mt-2'>
                            <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
                            <img src={src} alt="" className='group-hover:scale-125 transition-all rounded-md duration-500 w-full h-full'/>

                            <div className='p-2 md:p-4 space-y-1 md:space-y-2 absolute -bottom-full md:left-6 group-hover:bottom-2 md:group-hover:bottom-6 transition-all duration-500 z-50'>
                                <div className='flex flex-row items-center space-x-3'>
                                    <p className='text-[14px] md:text-xl space-x-1 md:space-x-2 inline font-semibold'>{name} - </p>
                                    <a href={url} target='_blank' className='hover:scale-110 duration-300'><FaLink size={16}/></a>
                                    <a href={code} target='_blank' className='hover:scale-110 duration-300'><VscGithub size={17}/></a>
                                </div>
                                <p className='text-[10px] md:text-[13px] text-gray-300'>{des}</p>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>


    </div>
  )
}

export default Projects