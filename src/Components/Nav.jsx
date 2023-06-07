import React from 'react'
import { Link } from "react-router-dom"

function Nav () {
  return(
  <div id="navbar">
  <nav>
    <Link to='/Home'> Home </Link>
    <Link to='/Blue'> Blue </Link>
    <Link to='/Red'> Red </Link>  
    <Link to='/Yellow'> Yellow </Link>
    <Link to='/Green'> Green </Link>  
  </nav>
  </div>
  )
}

export default Nav