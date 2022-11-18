import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Layout from './Componants/Layout/index.jsx'
function App() {
 

  return (
    <>
<Routes>
  <Route path='/' element={<Layout/>} />
</Routes>
    </>
  )
}

export default App
