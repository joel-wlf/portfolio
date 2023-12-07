import './App.css'
import Navbar from './components/Navbar'
import Blob from './components/Blob'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import { useState, useEffect } from 'react'

function App() {

  const [data, setData] = useState([])


  useEffect(() => {
     fetch('https://x8ki-letl-twmt.n7.xano.io/api:6xw4rbp5/portfolio_facts')
     .then(res => res.json())
     .then(data => setData(data))
  }, [])

  const [blobColor, setBlobColor] = useState({
    firstColor: "rgba(143, 0, 255, 0.3)",
    secondColor: "rgba(255, 0, 200, 0.3)"
  })

  return (
    <>
      <div className="blob-container">
        <Blob firstColor={blobColor.firstColor} secondColor={blobColor.secondColor} />
      </div>
      <Navbar />
      <Hero onHover={setBlobColor}/>
      <About data={data} />
      <Projects />
    </>
  )
}

export default App