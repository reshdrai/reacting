import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Confession from './Confession'
import App from './App'

function Section() {
  return (
    <>
    <Routes>
        <Route path='/' element={<App/>}/>
        <Route path='/confession' element={<Confession/>}/>
    </Routes>
    </>
  )
}

export default Section