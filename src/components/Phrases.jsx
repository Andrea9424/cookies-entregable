import React from 'react'
import './styles/Phrases.css'



const Phrases = ({handlePhrases, note}) => {
  return (
    <section className='container'>
     <h1>Fortune Cookie</h1>
    <section className='container1'>
    <article>
        <p>
            {note.phrase}
        </p>
    </article>
     <button onClick={handlePhrases}>Next Cookie</button>
    </section>
    <footer>Fuente: {note.author}</footer>
    </section>
  )
}

export default Phrases