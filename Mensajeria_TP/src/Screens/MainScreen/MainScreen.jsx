import React from 'react'
import './MainScreen.css'
import ContactList from '../../Components/SideBar/SideBar-Contacts/ContactList'
import SearchBar from '../../Components/SideBar/SideBar-Search/SearchBar'
import ChatBox from '../../Components/ChatBox/ChatBox'
import NavSidebar from '../../Components/SideBar/NavSideBar/NavSidebar'
import useSearchBar from '../../Hooks/useSearchBar'
import { useState } from 'react'
import FilteredList from '../../Components/SideBar/SideBar-Contacts/FilteredList'

export default function MainScreen() {

  const {searchState, handleChangeInput_Search } = useSearchBar()

  const user_name = localStorage.getItem('user_name')



  return (
    <div>
        <div className= "main-container">
            <div className="nav-side-bar">
              
              <NavSidebar/>
              
            </div>

            <div className= "side-bar">
                <div className= "side-bar-header">
                  <div className= "side-bar-header-title">
                    <h1 className='header-title'> Chats </h1>
                    <div className= "side-bar-header-buttons">

                      <button className='side-bar-sett-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-three-dots-vertical" viewBox="0 0 16 16">
  <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
                        </svg>
                      </button>
                      <button className='side-bar-new-chat-btn'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" color='white' fill="currentColor" class="bi bi-plus-square-fill" viewBox="0 0 16 16">
  <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0"/>
                        </svg>
                      </button>

                    </div>
                  </div>
                    <SearchBar 
                      searchState={searchState}
                      onChange={handleChangeInput_Search}
                    />
                </div> 
                <div className= "contact-list">
                  {
                    searchState.search !== ''
                    ? 
                    <FilteredList 
                      search={searchState.search}
                      user_name={user_name}
                      /> 
                    : 
                    <ContactList
                      user_name={user_name}
                      />
                  }
                </div>
            </div>
            <div className= "chat-box">
              <ChatBox/>
            </div>
        </div>
    </div>
  )
}
