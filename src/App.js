import React from 'react';
import Home from './pages/Home/Home';
import Example from './pages/Example/Example';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/example' exact element={<Example />} />
    </Routes>
  );
}

export default App;
