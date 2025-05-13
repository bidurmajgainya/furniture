import React from 'react'
import WhoWeAre from '../../components/whoWeAre/WhoWeAre'
import OurStory from '../../components/story/OurStory'
import Footer from "../../components/footer/Footer"
const About = () => {
  return (
    <div className='pt-10'>
      <WhoWeAre/>
      <OurStory/>
      <Footer/>
    </div>
  )
}

export default About