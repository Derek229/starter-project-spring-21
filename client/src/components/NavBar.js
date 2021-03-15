import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <Menu>
      <Link to='/'>
      <Menu.item>
        Home
      </Menu.item>
      </Link>
    </Menu>
  )
}

export default NavBar
