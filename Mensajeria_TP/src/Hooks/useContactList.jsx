import React from 'react'
import { contact_list } from '../Components/SideBar/Contact_list'
import ContactOption from '../Components/SideBar/SideBar-Contacts/ContactOption'

export default function useContactList(user_name = '') {

    if(contact_list.length === 0 ){
        return <span> You have no contacts yet</span>
    }

    const contactos_jsx = []
    for (const contacto of contact_list) {

        const ultimo_mensaje = contacto.id === 3
        ?
        `${user_name} ${contacto.ultimo_mensaje}` 
        :
        contacto.ultimo_mensaje

        contactos_jsx.push(
            
            <ContactOption 
            id={contacto.id}
            imagen={contacto.imagen}
            ultimo_mensaje={ultimo_mensaje}
            nombre={contacto.nombre}
            mensajes_sin_leer={contacto.mensajes_sin_leer}
            fecha_ultimo_mensaje={contacto.fecha_ultimo_mensaje}
            key={contacto.id}
            />
        )
    }

  return {
    contactos_jsx: contactos_jsx,
  }
}
