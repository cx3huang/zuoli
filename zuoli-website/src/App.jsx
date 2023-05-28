import React from 'react'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Services from './components/services/Services'
// import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

const App = () => {
  return (
    <>
        <Nav />
        <About />
        <Services />
        {/*<Testimonials />*/}
        <Contact />
        <Footer /> 
    </>
  )
}

export default App