import React from 'react';
import { GiVineFlower } from "react-icons/gi";

function Navbar() {
  return (
    <div>
      <nav className="fixed flex items-center p-3 shadow-xl dark:shadow-[#181818] top-0 w-screen h-24 bg-white">
      <GiVineFlower className='size-16 text-red-900' />

        <div className="text-7xl text-red-900 jaini-regular">
          <span >
            <a href='/'>
              &nbsp;Mahakumbh
            </a>
          </span>
        </div>
        
      </nav>
    </div>
  );
}

export default Navbar;
