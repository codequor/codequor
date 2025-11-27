import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Landingpage from './pages/Landingpage';
import ServicesSection from './components/ServiceSection';
import { Toaster } from 'react-hot-toast';
import About from './pages/About';
import Contact from './pages/Contact';
import ConsultQuote from './pages/ConsultQuote';
import AdminLogin from './pages/admin/AdminLogin';
import AdminDashboard from './pages/admin/AdminDashboard';
import AIFloatingButton from './pages/AI';

const App = () => {
  return (

      <BrowserRouter>
      <Toaster/>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Landingpage />} />
      <Route path='/about' element={<About />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/consult' element={<ConsultQuote />} />
      {/* <Route path='/ai' element={<AIFloatingButton />} /> */}
      <Route path='/services' element={<ServicesSection />} />
      <Route path='/admin/login' element={<AdminLogin />} />
      <Route path='/admin/dashboard' element={<AdminDashboard />} />

    </Routes>
   
    <Footer/>
  </BrowserRouter>
 
 
  )
}

export default App
