import React, { useContext, useState } from 'react'


export default function ThemeOption({theme, src}) {
  
  
  const [CurrTheme, setCurrTheme] = useState("light")



  function changeTheme(theme){
    setCurrTheme(theme)
  }



  return (
    <div className='theme-option-item' id={`theme-${theme}`}>
        
        <div onClick={() => {
          changeTheme(theme)
          document.body.setAttribute('data-theme', theme)
          localStorage.setItem('theme', theme)
          console.log(CurrTheme)
        }}>

          <img className='theme-option' src={`${src}`}/>
        
        </div>
      
      </div>
  )
  
}
