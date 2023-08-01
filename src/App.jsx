
import phrases from './db/phrases.json'
import './App.css'
import {useState} from 'react'
import {random} from './utils/random'
import Phrases from './components/Phrases'



const imgs = ['img1', 'img2', 'img3', 'img4']

function App() {
const[backgroundImg, setBackgroundImg] = useState(random(imgs))


const [note, setNote] = useState(random(phrases))
const handlePhrases = () => {
setNote(random(phrases))
setBackgroundImg(random(imgs))
}
 

  return (
    <main className={`viewbg ${backgroundImg}`}>
    
     <Phrases handlePhrases={handlePhrases} note={note} />
    
    </main>
  )
}

export default App
