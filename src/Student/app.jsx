import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from './Dashboard'
import Navbar from './Navbar'
const App = () => {
  return (<>
    <Navbar/>
     <Routes>
        <Route path="/" Component={Dashboard}/>
        <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
    </>
  )
}

export default App