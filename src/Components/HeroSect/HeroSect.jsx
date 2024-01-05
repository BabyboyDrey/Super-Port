import React, { useState, useEffect, useRef } from 'react'
import './HeroSect.css'
import Typed from 'typed.js'
import {
  FaEnvelope,
  FaWhatsapp,
  FaHtml5,
  FaCss3,
  FaReact,
  FaNode,
  FaGitAlt,
  FaNpm,
  FaGithub
} from 'react-icons/fa'
import { IoLogoJavascript } from 'react-icons/io'
import {
  SiMongodb,
  SiExpress,
  SiPuppeteer,
  SiRender,
  SiMongoose,
  SiJsonwebtokens
} from 'react-icons/si'
import PP from '../../Public/dare-pp.jpg'
import Shem from '../../Public/smartmockups_lp830hw7-removebg-preview.png'
import NewDaily from '../../Public/smartmockups_lp831tdc-removebg-preview.png'
import CHat from '../../Public/santa-hat-removebg-preview.png'
import PartyHat from '../../Public/party-hat-removebg-preview.png'
import NormieCap from '../../Public/cap-removebg-preview.png'
import Setec from '../../Public/setecsystems-smartmockups_lr0qy9kd-removebg-preview.png'
import Verse from '../../Public/versetelecoms-smartmockups_lr0qzye5-removebg-preview.png'

const HeroSect = () => {
  const [adj, setAdj] = useState(1)
  const [verb, setVerb] = useState(1)
  const [isOneProjectVisible, setIsOneProjectVisible] = useState(false)
  const [isTwoProjectVisible, setIsTwoProjectVisible] = useState(false)
  const [isThreeProjectVisible, setIsThreeProjectVisible] = useState(false)
  const [isFourProjectVisible, setIsFourProjectVisible] = useState(false)
  const [isImageVisible, setIsImageVisible] = useState(false)
  const [month, setMonth] = useState(1)

  const onePortfolioProjectRef = useRef(null)
  const twoPortfolioProjectRef = useRef(null)
  const threePortfolioProjectRef = useRef(null)
  const fourPortfolioProjectRef = useRef(null)
  const imageRef = useRef(null)
  const urguyRef = useRef(null)

  useEffect(() => {
    const adjIntervalId = setInterval(() => {
      setAdj(prevAdj => (prevAdj % 3) + 1)
    }, 5000)

    const verbIntervalId = setInterval(() => {
      setVerb(prevVerb => (prevVerb % 2) + 1)
    }, 10000)

    return () => {
      clearInterval(adjIntervalId)
      clearInterval(verbIntervalId)
    }
  }, [])

  const el = useRef(null)

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        'detailed solutions that scale with your business growth.',
        `${
          verb === 1 ? 'budget friendly' : 'operations costs reducing'
        } solutions.`,
        'new solutions that seamlessly integrate with legacy projects.',
        "solutions that meet market needs with ever flexible solutions' requirements."
      ],
      typeSpeed: 100,
      backSpeed: 100,
      startDelay: 8000,
      backDelay: 8000,
      onComplete: self => {
        setTimeout(() => {
          self.start()
        }, 1000)
      },
      loop: true
    })

    return () => {
      typed.destroy()
    }
  }, [])

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.4
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.target === onePortfolioProjectRef.current) {
          setIsOneProjectVisible(entry.isIntersecting)
        } else if (entry.target === twoPortfolioProjectRef.current) {
          setIsTwoProjectVisible(entry.isIntersecting)
        } else if (entry.target === imageRef.current) {
          setIsImageVisible(entry.isIntersecting)
        } else if (entry.target === threePortfolioProjectRef.current) {
          setIsThreeProjectVisible(entry.isIntersecting)
        } else if (entry.target === fourPortfolioProjectRef.current) {
          setIsFourProjectVisible(entry.isIntersecting)
        }
      })
    }, options)

    if (onePortfolioProjectRef.current) {
      observer.observe(onePortfolioProjectRef.current)
    }
    if (twoPortfolioProjectRef.current) {
      observer.observe(twoPortfolioProjectRef.current)
    }
    if (threePortfolioProjectRef.current) {
      observer.observe(threePortfolioProjectRef.current)
    }
    if (fourPortfolioProjectRef.current) {
      observer.observe(fourPortfolioProjectRef.current)
    }
    if (imageRef.current) {
      observer.observe(imageRef.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])

  useEffect(() => {
    if (isOneProjectVisible && onePortfolioProjectRef.current) {
      onePortfolioProjectRef.current.classList.add('animate')
      onePortfolioProjectRef.current.classList.add('hovered')
    } else {
      onePortfolioProjectRef.current.classList.remove('animate')
      onePortfolioProjectRef.current.classList.remove('hovered')
    }
  }, [isOneProjectVisible, onePortfolioProjectRef])
  useEffect(() => {
    if (isThreeProjectVisible && threePortfolioProjectRef) {
      threePortfolioProjectRef.current.classList.add('animate')
      threePortfolioProjectRef.current.classList.add('hovered')
    } else {
      threePortfolioProjectRef.current.classList.remove('animate')
      threePortfolioProjectRef.current.classList.remove('hovered')
    }
  }, [isThreeProjectVisible, threePortfolioProjectRef])
  useEffect(() => {
    if (isFourProjectVisible && fourPortfolioProjectRef) {
      fourPortfolioProjectRef.current.classList.add('animate')
      fourPortfolioProjectRef.current.classList.add('hovered')
    } else {
      fourPortfolioProjectRef.current.classList.remove('animate')
      fourPortfolioProjectRef.current.classList.remove('hovered')
    }
  }, [isFourProjectVisible, fourPortfolioProjectRef])
  useEffect(() => {
    if (isTwoProjectVisible && twoPortfolioProjectRef) {
      twoPortfolioProjectRef.current.classList.add('animate')
      twoPortfolioProjectRef.current.classList.add('hovered')
    } else {
      twoPortfolioProjectRef.current.classList.remove('animate')
      twoPortfolioProjectRef.current.classList.remove('hovered')
    }
  }, [isTwoProjectVisible, twoPortfolioProjectRef])

  useEffect(() => {
    if (isImageVisible && imageRef) {
      imageRef.current.classList.add('tick')

      imageRef.current.classList.remove('untick')
      // urguyRef.current.classList.add('swoosh')
    } else {
      imageRef.current.classList.remove('tick')

      imageRef.current.classList.add('untick')
      // urguyRef.current.classList.remove('swoosh')
    }
  }, [isImageVisible, imageRef])

  useEffect(() => {
    const mnth = new Date().getMonth() + 1
    setMonth(mnth)
  }, [])

  return (
    <>
      <div className='hero-sect-container'>
        <div className='heroSect'>
          <h1>
            Hi👋, I'm Babalola Dare,{' '}
            {adj === 1 ? (
              <span className={`span `}>Software developer</span>
            ) : adj === 2 ? (
              <span className='span'>Hi-Tech copywriter</span>
            ) : (
              adj === 3 && <span className={`span`}>Fullstack developer</span>
            )}{' '}
            that {verb === 1 ? 'develop' : verb === 2 && 'design'}{' '}
            <span className='span' ref={el} />
          </h1>
        </div>

        <div className='cta-pp-container'>
          <div className='pp-container'>
            <div className='img-wrapper'>
              <div className='ur-guy swoosh'>
                <img
                  src={
                    month === 12 || 1
                      ? CHat
                      : month === 5
                      ? PartyHat
                      : NormieCap
                  }
                  alt='image'
                />
              </div>
              <img
                className='img'
                ref={imageRef}
                alt='profile-pic'
                loading='lazy'
                src={PP}
              />
            </div>
          </div>
          <div className='cta-buttons'>
            <a
              href='https://wa.me/08108482412'
              target='_blank'
              rel='noreferrer'
            >
              <button>
                <FaWhatsapp size={20} />
                Hit me on Whatsapp
              </button>
            </a>
            <a
              href='mailto:babaloladare921@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <button>
                <FaEnvelope />
                Send me a mail
              </button>
            </a>
          </div>
        </div>
        <div className='custom-shape-divider-bottom-1700481497'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              className='shape-fill'
            ></path>
          </svg>
        </div>
      </div>

      <div id='skills' className='logos'>
        <div className='logos-slide'>
          <FaHtml5 className='logo' />
          <FaCss3 className='logo' />
          <IoLogoJavascript className='logo' />
          <FaReact className='logo' />
          <SiMongodb className='logo' />
          <SiExpress className='logo' />
          <FaNode className='logo' />
          <FaGitAlt className='logo' />
          <FaNpm className='logo' />
          <SiPuppeteer className='logo' />
          <h2 className='logo'>REST</h2>
          <SiRender className='logo' />
          <SiMongoose className='logo' />
          <SiJsonwebtokens className='logo' />
          <FaGithub className='logo' />
        </div>
        <div className='logos-slide'>
          <FaHtml5 className='logo' />
          <FaCss3 className='logo' />
          <IoLogoJavascript className='logo' />
          <FaReact className='logo' />
          <SiMongodb className='logo' />
          <SiExpress className='logo' />
          <FaNode className='logo' />
          <FaGitAlt className='logo' />
          <FaNpm className='logo' />
          <SiPuppeteer className='logo' />
          <h2 className='logo'>REST</h2>
          <SiRender className='logo' />
          <SiMongoose className='logo' />
          <SiJsonwebtokens className='logo' />
          <FaGithub className='logo' />
        </div>
        <div className='logos-slide'>
          <FaHtml5 className='logo' />
          <FaCss3 className='logo' />
          <IoLogoJavascript className='logo' />
          <FaReact className='logo' />
          <SiMongodb className='logo' />
          <SiExpress className='logo' />
          <FaNode className='logo' />
          <FaGitAlt className='logo' />
          <FaNpm className='logo' />
          <SiPuppeteer className='logo' />
          <h2 className='logo'>REST</h2>
          <SiRender className='logo' />
          <SiMongoose className='logo' />
          <SiJsonwebtokens className='logo' />
          <FaGithub className='logo' />
        </div>
      </div>

      <div id='portfolio-container'>
        <div class='custom-shape-divider-top-1700552595'>
          <svg
            data-name='Layer 1'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1200 120'
            preserveAspectRatio='none'
          >
            <path
              d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
              class='shape-fill'
            ></path>
          </svg>
        </div>
        <div className='porfolio-projects-container'>
          <h2>Selected Projects</h2>
          <div className='port-proj-conts'>
            <div className='porfolio-project' ref={threePortfolioProjectRef}>
              <div className='port-project-image-container'>
                <img src={Setec} alt='Setec Systems' />
              </div>
              <div className='port-project-texts-container'>
                <h3>Setec Systems</h3>
                <p>
                  It is a clean energy company providing engineering services
                  and expertise on industrial and infrastructure projects.
                </p>
                <a
                  href='https://setecsystem.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  URL LINK
                </a>
              </div>
            </div>
            <div className='porfolio-project' ref={fourPortfolioProjectRef}>
              <div className='port-project-image-container'>
                <img src={Verse} alt='Verse Telecoms' />
              </div>
              <div className='port-project-texts-container'>
                <h3>Verse Telecoms</h3>
                <p>
                  It is an industry leading provider of voice and data
                  communications services, equipped with highly trained
                  professionals that posses wide experiences in developing
                  solutions.
                </p>
                <a
                  href='https://versetelecoms.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  URL LINK
                </a>
              </div>
            </div>
            <div className='porfolio-project' ref={onePortfolioProjectRef}>
              <div className='port-project-image-container'>
                <img src={Shem} alt="shem's books" />
              </div>
              <div className='port-project-texts-container'>
                <h3>Shem's online book store</h3>
                <p>
                  It is an online book store created for book lovers and authors
                  to create, buy, sell and wishlist their favourite books.
                </p>
                <a
                  href='https://shems-books-kvky.onrender.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  URL LINK
                </a>
              </div>
            </div>
            <div className='porfolio-project' ref={twoPortfolioProjectRef}>
              <div className='port-project-image-container'>
                <img src={NewDaily} alt='Daily blogs' />
              </div>
              <div className='port-project-texts-container'>
                <h3>Daily blogs</h3>
                <p>
                  It is an online blog/journal for everyday people to document,
                  share and interact with other writers' journey in any aspect
                  of life.
                </p>
                <a
                  href='https://daily-blogs-izg8.onrender.com/'
                  target='_blank'
                  rel='noreferrer'
                >
                  URL LINK
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeroSect
