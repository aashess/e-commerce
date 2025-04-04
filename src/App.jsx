import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'
import Layout from './components/global/Layout'
import Home from './pages/Home'
import { BrowserRouter,Routes,Route } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Layout><Home/></Layout>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
