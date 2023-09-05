import { useState } from 'react'
import './App.css'
import MainSection from './components/MainSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div id="app-container">
        <h1>Hello</h1>
        <MainSection />
      </div>
    </>
  )
}

export default App
