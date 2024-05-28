import { useState, useEffect } from 'react';
import axios from "axios";
interface entryData {
  username: string;
  highscore: number;
  _id: string;
}

const Leaderboard = () => {
    const [entryData, setEntryData] = useState<entryData[]>([])
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
        {entryData.map(data => <li key={data._id} className='leaderboardEntries'>{count++} ~ {data.username}: {data.highscore} points</li>)}
      </ul>
    </div>
  </div>
};

export default Leaderboard;