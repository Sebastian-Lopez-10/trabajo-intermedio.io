import React from 'react'
import useStartingForm from '../../Hooks/useStartingForm'


export default function StartingForm() {
  const {formState, handleSubmit, handleChangeInput} = useStartingForm()

  return (
    <form className='start-form' onSubmit={handleSubmit}>
      <h1 className='q-title'>
        Please enter your name
      </h1>
      <div className='form-input-container'>
        <input className='input-name-bar'
          type='text'
          name='user_name'
          id='user_name'
          value={formState.user_name}
          onChange={handleChangeInput}  
        />
      </div>
      <button className='confirm-button' 
      type='submit'
      disabled={!formState.user_name.trim()}
      >
        Confirm
      </button>
      
    </form>
  )
}