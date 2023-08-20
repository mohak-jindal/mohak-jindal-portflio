import React from 'react'
import Hero from '../components/hero/Hero'
import Service from "../components/services/Service"
import AboutHome from '../components/about/aboutHome/AboutHome'
import Projects from '../components/projects/projectsInfo/Projects'
import ProjectBanner from '../components/projects/projectBanner/ProjectBanner'
import ContactBanner from '../components/contact/contactBanner/ContactBanner'

const Home = () => {
  return (
    <>
    <Hero />
    <AboutHome />
    <Service />
    <Projects />
    <ProjectBanner />
    <ContactBanner />
    </>
  )
}

export default Home