import React from 'react'
import BannerSlider from '../components/BannerSlider'
import AboutDetail from '../components/AboutDetail'
import ServiceSection from '../components/ServiceDetail'
import ContactDetail from '../components/ContactDetail'
import ProductDetail from '../components/ProductDetail'

const Home = () => {
  return (
    <>
      <BannerSlider />
      <AboutDetail /> 
      <ProductDetail />
      <ServiceSection />
      <ContactDetail />
    </>
  )
}

export default Home