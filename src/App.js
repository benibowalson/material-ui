import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import CompA from './components/CompA'
import CompB from './pages/CompB'
import CompC from './views/CompC'
import ErrorView from './views/ErrorView'

import './App.css'
import Home from './pages/Home'

const App = () => {
  return (
    <BrowserRouter>
      <nav>
        <Link to='/' className='navlink'>Home</Link>
        <Link to='/compa' className='navlink'>Component A</Link>
        <Link to='/compb' className='navlink'>Component B</Link>
        <Link to='/compc' className='navlink'>Component C</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/compa' element={<CompA />} />
        <Route path='/compb' element={<CompB />} />
        <Route path='/compc' element={<CompC />} />
        <Route path='*' element={<ErrorView />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
