import React from 'react'
import ContactOption from './ContactOption'
import './css/ContactList.css'
import { contact_list } from '../Contact_list'
import useContactList from '../../../Hooks/useContactList'



export default function ContactList({user_name = ''}) {
    
    const {contactos_jsx} = useContactList(user_name)
    
    return (
        
        <div className='contact'>
            {contactos_jsx}
        </div>
        
    )
}