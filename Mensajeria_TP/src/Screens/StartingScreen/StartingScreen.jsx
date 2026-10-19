import React, { useState, useContext } from 'react'
import StartingForm from '../../Components/StartingForm/StartingForm'
import './StartingScreen.css'
import ThemeOption from '../../Components/Theme-options/ThemeOption'
import { RenderContext } from '../../Context/RenderContext'
import ThemeComp from '../../Components/Theme-options/ThemeComp'

export default function StartingScreen() {
  
  const {changeConfirmed, Confirmed, setConfirmed, formReady, setFormReady} = useContext(RenderContext)
  
  
  
  console.log(Confirmed)
  return (
    <div className='start-screen'>
      <div className='screen-background-start'>

        <ThemeComp/>
      
      {formReady && <StartingForm/>}
      </div>
    </div>
    
  )
}
