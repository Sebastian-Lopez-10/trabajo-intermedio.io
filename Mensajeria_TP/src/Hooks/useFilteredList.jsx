import React from 'react'
import { contact_list } from '../Components/SideBar/Contact_list'
import ContactOption from '../Components/SideBar/SideBar-Contacts/ContactOption'

export default function useFilteredList(search = '', user_name = '') {

        const search_parameter = search.trim().toLowerCase()
    
        const filtered_contacts = contact_list.filter((contacto) =>
            contacto.nombre.toLowerCase().includes(search_parameter)
        )
        
        
        const filtered_jsx = []
        for(const contacto of filtered_contacts) {

            const ultimo_mensaje = contacto.id === 3
            ?
            `${user_name} ${contacto.ultimo_mensaje}` 
            :
            contacto.ultimo_mensaje
            
            filtered_jsx.push(
                
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
    search_parameter: search_parameter,
    filtered_jsx: filtered_jsx,
    filtered_contacts: filtered_contacts
    }
}
