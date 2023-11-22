import './App.css'
import Navbar from './components/Navbar'
import Blob from './components/Blob'
import Hero from './components/Hero'
import About from './components/About'
import { useState } from 'react'

function App() {

  const [blobColor, setBlobColor] = useState({
    firstColor: "rgba(143, 0, 255, 0.3)",
    secondColor: "rgba(255, 0, 200, 0.3)"
  })

  return (
    <>
      <Blob firstColor={blobColor.firstColor} secondColor={blobColor.secondColor} />
      <Navbar />
      <Hero onHover={setBlobColor}/>
      <About />
    </>
  )
}

export default App