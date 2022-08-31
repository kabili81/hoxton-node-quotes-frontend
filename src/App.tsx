import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [quotes, setQuotes] = useState([])

  useEffect(() =>{
    fetch(`http://localhost:6789/quotes`)
    .then(resp => resp.json())
    .then(quotesFromServer => setQuotes(quotesFromServer))
  }, [])

  return (
    <div className="App">
      <h1>Your Quote</h1>
      <ul>
        {
          quotes.map(item => <li>
            <h2>{item.name}</h2>
            <h2>{item.age}</h2>
            <img src={item.image} />
            <h3>{item.quote}</h3>
          </li>)
        }
      </ul>
    </div>
  )
}

export default App
