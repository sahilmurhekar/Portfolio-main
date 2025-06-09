
import './App.css'
import 'animate.css/animate.min.css';
import About from './components/About'
import Hero from './components/Hero'
import Journey from './components/Journey'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Highlights from './components/Highlights'
import Contact from './components/Contact'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Journey  />
      <Skills />
      <Projects />
      <Highlights />
      <Contact/>

      <a href="#top" className='btn btn btn-ghost btn-circle bg-zinc-300 fixed bottom-10 right-18 z-50 text-2xl text-black floating-icon'> ↑ </a>
    </>
  )
}

export default App
