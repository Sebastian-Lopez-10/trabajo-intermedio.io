import React, { createContext, useContext, useState } from 'react'



export const RenderContext = createContext()

export default function RenderContextProvider({children}) {

    const [Confirmed, setConfirmed] = useState(true)
    const [formReady, setFormReady] = useState(false)

    function changeConfirmed(){
        setConfirmed()
    }

    const Renders={
        changeConfirmed: changeConfirmed,
        Confirmed: Confirmed,
        setConfirmed: setConfirmed,
        formReady: formReady,
        setFormReady: setFormReady
    }

return (
    <RenderContext.Provider value={Renders}>
        {children}
    </RenderContext.Provider>
)
}
