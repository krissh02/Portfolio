import React, { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import {Link} from 'react-scroll'
import Aos from 'aos';
import "aos/dist/aos.css"

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: "about",
    },
    {
      id: 2,
      link: "skills",
    },
    {
      id: 3,
      link: "projects",
    },
    {
      id: 5,
      link: "contact",
    },
  ];
  useEffect(()=> {
    Aos.init();
  },[])
  return (
    <div className="w-full text-white flex items-center justify-between px-3 md:px-6 h-14 md:h-20 bg-black fixed z-50" 
    data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000">
      <div>
        <h1 className="ml-2 text-3xl md:text-5xl font-signature">KS</h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({id,link}) => (
          <li
            key={id}
            className="capitalize text-gray-500 px-5 cursor-pointer font-medium hover:scale-105 duration-200 hover:border-b-2 border-purple-500 hover:text-purple-400"
          >
             <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      {/* Menubar for mobile device */}

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer z-10 pr-2 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
      </div>
      {nav && (
          <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500" 
          data-aos="fade-right"
          data-aos-duration="500">
            {links.map(({id,link}) => (
              <li
                key={id}
                className="capitalize px-4 cursor-pointer text-xl py-3"
              >
                <Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>{link}</Link>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default Navbar;
