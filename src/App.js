import React from 'react'
import Header from './global/Header/Header'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Example from './pages/Example/Example'
import Footer from './global/Footer/Footer'


function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/example' exact element={<Example />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;