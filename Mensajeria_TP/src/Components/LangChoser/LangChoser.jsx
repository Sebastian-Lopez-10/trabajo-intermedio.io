import React, { useContext, useState } from 'react'
import { LangContext } from '../../Context/LangContext'


// const available_langs = [

//   {
//     nombre: 'Spanish',
//     value: 'Span',
//     icon: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1a/Flag_of_Argentina.svg/250px-Flag_of_Argentina.svg.png?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
//     key: '1'
//   },

//   {
//     nombre: 'English',
//     value: 'Eng',
//     icon: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/b/be/Flag_of_England.svg/250px-Flag_of_England.svg.png?utm_source=es.wikipedia.org&utm_campaign=parser&utm_content=thumbnail',
//     key: '2'
//   }
// ]

// export default function LangChoser({ onConfirm }) {

//   const {selected_lang, changeLang} = useContext(LangContext)
//   const [confirmed, setConfirmed] = useState(false)

//   if (!confirmed) return null


//   const langChoices_jsx = []
//   for (const langs of available_langs){
//     langChoices_jsx.push(
//       <div>
//         <div className='lang-option-container'>
//           <h2>
//             {langs.nombre}
//           </h2>

//           <img 
//           className='langs-option-image' 
//           src={langs.icon} 
//           alt={langs.nombre} 
//           />
//           {
//           selected_lang !== langs.value
//           ?
//           <button onClick={() => changeLang(langs.value)}> Select </button>
//           :
//           <span>Selected</span>
//           }
//         </div>
//     </div>
//     )
//   }
//   return (
//     <div>

//       <div className='question-container'>
//           <h1>hola</h1>
//       </div>

//       {langChoices_jsx}

//       <button className='confirm-button' onClick={() => { setConfirmed(false); onConfirm() }}> Confirm </button>
  
//     </div>
//   )
// }
