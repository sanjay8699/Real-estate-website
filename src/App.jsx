import React from 'react'
import Header from './Components/header/Header'
import Hero from './Components/hero/Hero'
import './app.css'
import Companies from './Components/companies/Companies'
import Residencies from './Components/residencies/Residencies'
import Value from './Components/value/Value'
import Contact from './Components/contact/Contact'
import Getstarted from './Components/getstarted/Getstarted'
import Footer from './Components/footer/Footer'
const App = () => {
  return (
    <div className='app'>
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
      </div>
      <Companies/>
      <Residencies/>
      <Value/>
      <Contact/>
      <Getstarted/>
      <Footer/>
    </div>
  )
}

export default App
