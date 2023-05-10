import db from "./db/db.json"
import './App.css'
import { useState } from "react"
import Container from "./components/Container"

const images = ["img1", "img2", "img3", "img4"]
function App() {
  const getRandomItem =  (listItems) => {
    const randomIndex = Math.floor(Math.random() * listItems.length)
    return listItems[randomIndex]
  }
  const [quote, setQuote] = useState (getRandomItem(db))
  const [image, setImage] = useState (getRandomItem(images))
  
  const getNewQuote = () =>{
   
    setQuote (getRandomItem(db))
    setImage (getRandomItem(images))
  }

  
  
  
  return (
    <div className={`App ${image}`}>
      <Container quote = {quote} getNewQuote = {getNewQuote}/>
      
    </div>
  )
}

export default App
