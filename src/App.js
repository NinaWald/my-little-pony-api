import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PonyStart from 'components/PonyStart';
import PonyDetails from 'components/PonyDetails'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PonyStart />} />
        <Route path="/character/:id" element={<PonyDetails />} />
      </Routes>
    </BrowserRouter>
  )
}
