import React from 'react'
import {Link} from 'react-router'

export default function ContactOption(propiedades) {
  return (
     <div >
      <div className='contact-container'>

          <div className='contact-img-container'>
              <img src={propiedades.imagen} alt={propiedades.nombre} className="contact-img" />
          </div>

          <div className='contact-info'>
            
            <h2>{propiedades.nombre}</h2>
            <p>{propiedades.ultimo_mensaje}</p>
            
          </div>

          <div className='contact-date'>
            <span className='text-date-con'>{propiedades.fecha_ultimo_mensaje}</span>     
            <div className='to-read'>
              <span>{propiedades.mensajes_sin_leer}</span> 
            </div>
          </div>


      </div>
        <Link to={'/contact/:${contacto.id}'}></Link>
    </div>
  )
}