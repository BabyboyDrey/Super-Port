import React, { useState, useRef, useEffect } from 'react'
import {
  FaAlignRight,
  FaLongArrowAltRight,
  FaEnvelope,
  FaPhone,
  FaGithub
} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [izCopied, setIzCopied] = useState(0)
  const phoneNumberRef = useRef(null)
  const emailRef = useRef(null)
  const mobileNavRef = useRef(null)

  const handleMobileNavActive = () => {
    if (!active) {
      setActive(true)
      const mobileNavRef = document.getElementById(
        'mobile-nav-pop-up-container'
      )
      // if (active) {
      //   mobileNavRef.style.height = window.innerHeight + 'px'
      // }
      // console.log('cv', mobileNavRef.style.height)
      // document.body.style.position = 'fixed'
      // document.body.classList.add('nomore')
      document.body.classList.add('mobile-nav-open')
    } else {
      setActive(false)
      document.body.classList.remove('mobile-nav-open')
      // document.body.style.position = 'static'
      // document.body.classList.remove('nomore')
    }
  }

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault()

    const targetElement = document.getElementById(targetId)
    setActive(false)
    document.body.style.position = 'static'
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      })
    }
  }

  return (
    <div id='nav'>
      <div id='brandName'>
        <span>D</span>
        <span>B</span>
      </div>
      <div id='bg-nav-links-container'>
        <div id='desktop-nav-links-container'>
          <h3 onClick={e => handleSmoothScroll(e, 'skills')}>Skills</h3>

          <h3 onClick={e => handleSmoothScroll(e, 'portfolio-container')}>
            Projects
          </h3>

          <h3 onClick={e => handleSmoothScroll(e, 'contact-me')}>Contact me</h3>
        </div>
        <div id='mobile-nav-links-container'>
          <div>
            <FaAlignRight
              size={26}
              className='hamburger'
              onClick={handleMobileNavActive}
            />
          </div>
          {active && (
            <div className='mobile-nav-pop-up-bg'>
              <div ref={mobileNavRef} id='mobile-nav-pop-up-container'>
                <div className='X-container'>
                  <FaLongArrowAltRight
                    className='X'
                    size={29}
                    onClick={handleMobileNavActive}
                  />
                </div>
                <div id='mobile-nav-pop-up-links-container'>
                  <h3 onClick={e => handleSmoothScroll(e, 'skills')}>Skills</h3>

                  <h3
                    onClick={e => handleSmoothScroll(e, 'portfolio-container')}
                  >
                    Projects
                  </h3>

                  <h3 onClick={e => handleSmoothScroll(e, 'contact-me')}>
                    Contact me
                  </h3>
                </div>
                <div className='quick-contact-links'>
                  <h2
                    ref={phoneNumberRef}
                    onClick={e => {
                      const text = phoneNumberRef.current.textContent
                      navigator.clipboard.writeText(text)
                      setIzCopied(1)
                      setTimeout(() => {
                        setIzCopied(0)
                      }, 1000)
                    }}
                  >
                    <FaPhone />
                    {izCopied === 1 ? 'Copied!' : '08108482412'}
                  </h2>
                  <h2
                    ref={emailRef}
                    onClick={e => {
                      const text = emailRef.current.textContent

                      navigator.clipboard.writeText(text)
                      setIzCopied(2)
                      setTimeout(() => {
                        setIzCopied(0)
                      }, 1000)
                    }}
                  >
                    <FaEnvelope />
                    {izCopied === 2 ? 'Copied!' : 'babaloladare921@gmail.com'}
                  </h2>
                  <a
                    href='https://github.com/BabyboyDrey'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <FaGithub />
                    Github Profile
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
