import { useState } from 'react'
import './App.css'
import MainSection from './components/MainSection'
import NavBar from './components/NavBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar />
      <div id="app-container">
        <MainSection />
      </div>
    </>
  )
}

export default App
