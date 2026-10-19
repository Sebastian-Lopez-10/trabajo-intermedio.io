import React from 'react'
import './SearchBar.css'

export default function SearchBar({searchState, onChange}) {



    return (
    <div className='search-bar'>
      <svg className="search-icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="7.5" />
        <line x1="21" y1="21" x2="16.85" y2="16.85" />
      </svg>

      <input
        className='search-bar-input'
        type='text'
        id='search'
        value={searchState.search}
        onChange={onChange}
        placeholder='Search for a chat or contact'/>

      
      {console.log(searchState)}
    </div>


      
  )
}
