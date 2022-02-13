import React from 'react'
import PropTypes from 'prop-types'
import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Navbar({title}) {
  return (
    <nav className='navbar shadow-lg bg-neutral text-neutral-content mb-12'>
      <div className="container mx-auto">
        <div className="flex-none">
          <FaGithub className='pr-2 text-4xl'/>
        </div> 
        <div className="flex-1 px-2 mx-2">
          <Link to="/" className=' text-lg font-bold align-middle'>{title}</Link>
        </div> 
        <div className="flex-none">
          <Link to="/" className='btn btn-ghost btn-small btn-rounded'>Home</Link>
        </div> 
        <div className="flex-none">
          <Link to="/about" className='btn btn-ghost btn-small btn-rounded'>About</Link>
        </div> 
      </div>
    </nav>
  )
}

Navbar.defaultProps = {
  title: "Github Finder"
}

Navbar.propTypes = {
  title: PropTypes.string,
}

export default Navbar