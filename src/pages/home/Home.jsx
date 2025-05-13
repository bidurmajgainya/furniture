import React from 'react'

import Hero from '../../components/hero/Hero'
import BentoCategoryGrid from '../../components/catagory/Catagory'
import Ambition from '../../components/ambition /Ambition'
import Benifits from '../../components/Benifits/benifits'
import Product from '../../components/product/Product'
import Inscripation from '../../components/inspriation/Inscripation'
import SupportSection from '../../components/support/Support'
import Footer from '../../components/footer/Footer'
const Home = () => {
  return (
    <div className='pt-10'>
    <Hero/>
    <Benifits/>
    <Product/>
    {/* <BentoCategoryGrid/> */}
    <Inscripation/>
    <Ambition/>
    <SupportSection/>
    <Footer/>
    </div>
  )
}

export default Home