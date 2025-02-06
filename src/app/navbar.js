import React from 'react'

function Navbar() {
  return (
    <div>
      <nav className="fixed flex justify-between items-center p-3 shadow-xl dark:shadow-[#181818] top-0 w-screen h-24 bg-white">
        <span className="text-7xl text-red-900 jaini-regular"><a href='/'>Kumbh</a></span>
      </nav>
    </div>
  )
}

export default Navbar
