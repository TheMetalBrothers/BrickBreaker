import { useState, useEffect } from 'react';
import axios from "axios";

const Leaderboard = () => {
    const [entryData, setEntryData] = useState([])
    let count = 1;

    useEffect(() => {
    axios.get('http://localhost:3001/entry').then(res => {
      setEntryData(res.data);
    })
  }, [])


  return <div className="Leaderboard">
    <div>
        <h3 className='leaderboardTitle'>Leaderboard</h3>
      <ul>
        {entryData.map(data => <li className='leaderboardEntries'>{count++} ~ {data.username}: {data.highscore} points</li>)}
      </ul>
    </div>
  </div>
};

export default Leaderboard;