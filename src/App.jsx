import './App.css'
import Navbar from './components/Navbar'
import Blob from './components/Blob'
import Hero from './components/Hero'
import { useState } from 'react'

function App() {

  const [blobColor, setBlobColor] = useState({
    firstColor: "rgba(143, 0, 255, 0.30)",
    secondColor: "rgba(255, 0, 200, 0.233)"
  })

  return (
    <>
      <Blob firstColor={blobColor.firstColor} secondColor={blobColor.secondColor} />
      <Navbar />
      <Hero />
    </>
  )
}

export default App
