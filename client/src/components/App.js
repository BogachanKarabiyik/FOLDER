import LoginRegister from './LoginRegister'
import Game from './Game';
import { useState, useEffect } from 'react';


function App() {

  const [playerName, setPlayerName] = useState(false)

  useEffect(() => {
    if (playerName) {
      localStorage.setItem("playerName", playerName)
    }
  }, [playerName])
  

  const game = (
    <Game playerName={playerName}/>
  )

  const login = (
    <LoginRegister playerName={setPlayerName}/>
  )

  return (
    (localStorage.getItem('playerName') || playerName) ? game : login
  );
}

export default App;
