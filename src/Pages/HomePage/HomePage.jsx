import React from 'react'
import { Helmet } from 'react-helmet'
import NavHeadroom from '../../Components/Navheadroom/NavHeadroom.jsx'
import HeroSect from '../../Components/HeroSect/HeroSect.jsx'
import Footer from '../../Components/Footer/Footer.jsx'

const HomePage = () => {
  return (
    <div>
      <Helmet>
        <title>DB - Home</title>
        <meta
          name='description'
          content="This is the home page of dare's babalola website"
        />
      </Helmet>
      <NavHeadroom />
      <HeroSect />
      <Footer />
    </div>
  )
}

export default HomePage
