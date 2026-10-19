
import React from 'react'
import './css/FilteredList.css'
import useFilteredList from '../../../Hooks/useFilteredList'

export default function FilteredList({search = '', user_name = ''}) {


    const {filtered_jsx, filtered_contacts} = useFilteredList(search, user_name)
    

    if (filtered_contacts.length === 0) {
        return (
            <div className='alert-container'>
                <span className='moji'> :( </span>
                <span className='alert'> No contacts were found </span>
            </div>
        )
    }
    
  return (
    <div className='contact'>
        {filtered_jsx}
    </div>
  )
}
