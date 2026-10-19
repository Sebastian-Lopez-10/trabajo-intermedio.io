import React from 'react'
import { RenderContext } from '../../Context/RenderContext'
import { useContext } from 'react'
import ThemeOption from './ThemeOption'


export default function ThemeComp() {

    const {Confirmed, changeConfirmed, formReady, setFormReady} = useContext(RenderContext)

    if (!Confirmed) return null


return (
    <div className='theme-options'>

        <div className='theme-container'>
            <div className='container-padding'>
                
                <div className='title-container'>
                    <h1 className='q-title'>Select your prefered theme color</h1>
                </div>
                <div className='theme-btn-container'>
                    <ThemeOption theme="dark" src='/public/themes/moon.png'/>
                    <ThemeOption theme="light" src="/public/themes/sun.png"/>
                </div>
                
                <button className='confirm-button' onClick={() => {changeConfirmed(false); setFormReady(true) }}> Confirm </button>
                
            </div>
        </div>

        
    </div>
)
}
