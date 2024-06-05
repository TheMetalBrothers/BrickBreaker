import { useEffect, useState } from 'react'
import './App.css'
import './styles/App.scss'
import 'bulma/css/bulma.min.css';
import GameProvider from "./game/state/context";
import GameContainer from "./game/GameContainer/GameContainer";
import { socket } from "./util/utils";


interface Response {
  status: number;
  msg: string;
}

function App() {
  // const [score, setScore] = useState(0)
  const [room, setRoom] = useState("");
  const [msg, setMsg] = useState("");
  
  const sendMessage = ()=>{
    socket.emit('send_message',{message: msg || 'message'}, room);
    console.info('button clicked')
  }
  useEffect(()=>{
    try {
      socket.on("recive_message", (data) => {
        console.log(data.message);
      });
    } catch (error) {
      console.log(error)
    }
    
  },[])

  const connectRoom = ()=>{
    socket.emit("join_room",room,(response: Response)=>{
      console.log(response.status);
      alert(response.msg)
    });
  }
  return (
    <>
    <div>
      <GameProvider>
      <GameContainer />
      </GameProvider>
    </div>
    <h1>Brick-Breaker</h1>
    <div>
      <div className="typeMessage">
        <input type="text" 
        placeholder="Message" 
        value={msg} 
        onChange={(e)=>setMsg(e.target.value)} 
        />
        <button onClick={sendMessage}>Send</button>
        <input 
        type="text" 
        placeholder='Room' 
        onChange={(e)=>setRoom(e.target.value)} 
        />
        <button onClick={connectRoom} >Connect Room</button>
      </div>
        {/* <button className='score' onClick={() => setScore((score) => score + 1)}>
          Score: {score}
        </button> */}
      </div>
      <p className="signInNotif">
        Sign in to play online and try for a spot on the leaderboard!
      </p>
    </>
  )
}

export default App
