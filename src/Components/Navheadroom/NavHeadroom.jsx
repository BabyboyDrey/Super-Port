import React from 'react'
import Headroom from 'react-headroom'
import Navbar from '../Navbar/Navbar'

const NavHeadroom = () => {
  return (
    <Headroom style={{ zIndex: 10000 }}>
      <Navbar />
    </Headroom>
  )
}

export default NavHeadroom
