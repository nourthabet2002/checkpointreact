import React from 'react'
import gmc from './gomycode.png'

const Navbar = () => {
  return (
    < div className='navbar'>
      <ul>
        <li>Home</li>
         <li>contact</li>
         <li>history</li>
         </ul>
         <img src={gmc} alt="" />
      
    </div>
  )
}

export default Navbar;
