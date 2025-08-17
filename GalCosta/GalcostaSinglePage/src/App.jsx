import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter as Router, Link } from "react-router-dom";
import './App.css'
import Home from './pages/Home'
import Footer from './components/Footer'
import AppRoutes from './Routas'

function App() {

  return (
    <>
    <Router>
      <Header></Header>
          <AppRoutes />

      <Footer></Footer>
    </Router>
    </>
  )
}

export default App
