import React, { useState } from 'react'
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Footer.css'
const Footer = () => {
  return (
    <div id='contact-me'>
      <h2>Get in touch</h2>
      <div className='socials-container'>
        <a href='tel:08108482412'>
          <h4>
            <FaPhone />
            08108482412
          </h4>
        </a>
        <a href='mailto:babaloladare921@gmail.com'>
          <h4>
            <FaEnvelope />
            babaloladare921@gmail.com
          </h4>
        </a>
        <a
          href='https://github.com/BabyboyDrey'
          target='_blank'
          rel='noreferrer'
        >
          <h4>
            <FaGithub />
            Github profile
          </h4>
        </a>
        <a
          href='https://www.linkedin.com/in/dare-babalola-089b5b253?trk=people-search-result/'
          target='_blank'
          rel='noreferrer'
        >
          <h4>
            <FaLinkedin />
            LinkedIn profile
          </h4>
        </a>
        <h4>{new Date().getFullYear()}</h4>
      </div>
    </div>
  )
}

export default Footer
