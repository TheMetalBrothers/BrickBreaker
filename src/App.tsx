import { useState } from 'react'
import './App.css'
import './styles/App.scss'
import 'bulma/css/bulma.min.css';


function App() {
  const [score, setScore] = useState(0)

  return (
    <>
      <div>
      </div>
      <h1>Brick-Breaker</h1>
      <div>
        <button className='score' onClick={() => setScore((score) => score + 1)}>
          Score: {score}
        </button>
      </div>
      <p className="signInNotif">
        Sign in to play online and try for a spot on the leaderboard!
      </p>
    </>
  )
}

export default App
