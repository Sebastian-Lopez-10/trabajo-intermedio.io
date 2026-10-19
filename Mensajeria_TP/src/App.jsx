import React from 'react'
import { Route, Routes } from 'react-router'
import StartingScreen from './Screens/StartingScreen/StartingScreen'
import { useContext, useState } from 'react'
import MainScreen from './Screens/MainScreen/MainScreen'

export default function App() {

  const preferedTheme  = localStorage.getItem('theme')
  
  if (preferedTheme) {
    document.body.setAttribute('data-theme', preferedTheme)
  }
  return (
    <Routes>
      <Route path='/' element={<StartingScreen/>}/>
      <Route path='/main' element={<MainScreen/>}/>
    </Routes>
  )
}
