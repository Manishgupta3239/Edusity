import './index.css'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/hero/Hero'
import Program from './components/program/Program'
import Title from './components/title/Title'
import About from './components/about/About'
import Campus from './components/campus/Campus'
import Testimonials from './components/testimonials/Testimonials'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
    
      <div className="container">
      <Title subtitle = 'Our Program' title = 'What We Offer'/>
      <Program/>
      <About/>
      <Title subtitle = 'Gallery' title = 'Campus Photos'/>
      <Campus/>
      <Title subtitle = 'Testimonials' title = 'What Students Says'/>
      <Testimonials/>
      <Title subtitle = 'CONTACT US' title ='Get in Touch'/> 
      <Contact/>
      <Footer/>   
      </div>
    
    </>
  )
}

export default App
