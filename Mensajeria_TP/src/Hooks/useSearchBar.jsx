import React from 'react'
import { useState } from 'react'

export default function useSearchBar() {

    const [searchState, setSearchState] = useState({search: ''})




    function handleChangeInput_Search(e) {
    
    
    setSearchState(
    
    (prevSearchState) => {
            const cloned_state = {...prevSearchState}
            cloned_state.search = e.target.value
            return cloned_state
        }
    )
}


    console.log(searchState)
return {
    handleChangeInput_Search: handleChangeInput_Search,
    setSearchState: setSearchState,
    searchState: searchState

}

}
