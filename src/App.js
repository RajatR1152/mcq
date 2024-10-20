import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import TestPage from './components/TestPage'
import DataContextProvider from './context/DataContext'
import ResultPage from './components/ResultPage'

export default function App() {
  return (
    <BrowserRouter>
      <DataContextProvider>
        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/test' element={<TestPage />} />
          <Route path='/test/:q' element={<TestPage />} />
          <Route path='/result' element={<ResultPage />} />
        </Routes>
      </DataContextProvider>
    </BrowserRouter>
  )
}
