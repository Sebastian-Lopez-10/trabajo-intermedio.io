import React, { useState } from 'react'
import { useNavigate } from 'react-router'


export default function useStartingForm() {
    
    const [formState, setFormState] = useState({user_name: ''})
    const navigate = useNavigate()

    function handleSubmit (evento){
        evento.preventDefault()
        const form = evento.target
        const user_name = form.user_name.value.trim()

        if (!user_name) return

        localStorage.setItem('user_name', user_name)
        navigate('/main')
    }

    function handleChangeInput (evento) {
        const field = evento.target
        const field_name = field.name
        const field_value = field.value

        setFormState(
            (prevFormState) => {
                const cloned_state = {...prevFormState}
                cloned_state[field_name] = field_value
                return cloned_state
            }
        )
    }

    console.log(formState)
    return {
    formState: formState,
    handleSubmit: handleSubmit,
    handleChangeInput: handleChangeInput,
    user_name: formState.user_name
    }
}
    