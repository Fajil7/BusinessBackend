import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './component/Header/Header'
  ; import Home from './component/Home/Home';
import Footer from './component/Footer/Footer';
import About from './component/About/About';
import Contact from './component/Contact/Contact';
import Faq from './component/Faq/Faq';
import Listing from './component/Listing/Listing';
import Directory from './component/Directory/Directory';
import Listedetail from './component/Listedetail/Listedetail';




function App() {
  return (
    <>

      <Router>
        <Header />
        <Routes>

          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/faq' element={<Faq />} />
          <Route path='/listing' element={<Listing />} />
          <Route path='/directory' element={<Directory />} />
          <Route path='/forms/:id' element={<Listedetail />} />

        </Routes>
        <a className='w-icon' href='https://api.whatsapp.com/send/?phone=918582848434&text&type=phone_number&app_absent=0' target='-blank'>
          <img
            src='	https://businesssphere.info/images/w.png'
          />
        </a>
        <Footer />
      </Router>

    </>
  )
}

export default App
