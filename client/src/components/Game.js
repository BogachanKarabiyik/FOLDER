import React, { useRef, useEffect, useState} from 'react'
import { SocketProvider } from '../contexts/SocketProvider';
import houseLvl1 from '../stylesheets/shared/houseLvl1.png'

const SAVE_INTERVAL_MS = 2000

export default function Game({ playerName }) {

  const socket = SocketProvider()

  const refBuilderTower = useRef(null);
  const refBuilderHouse = useRef(null);
  const refBuilderFarm = useRef(null);
  const refBuilderWoodCutter = useRef(null);
  const refBuilderStoneQuarry = useRef(null);
  const refBuilderCommander = useRef(null);
  const refBuilderDefenceShop = useRef(null);
  const refGameScreen1s = useRef(null);
  const refGameScreen2s = useRef(null);
  const refGameScreen3s = useRef(null);
  const refGameScreen4s = useRef(null);
  const refGameScreen5s = useRef(null);
  const refGameScreen6s = useRef(null);
  const refGameScreen7s = useRef(null);
  const refGameScreen8s = useRef(null);
  const refGameScreen9s = useRef(null);
  const refGameScreen10s = useRef(null);
  const refGameScreen11s = useRef(null);
  const refGameScreen12s = useRef(null);
  const refGameScreen13s = useRef(null);
  const refGameScreen14s = useRef(null);
  const refGameScreen15s = useRef(null);
  const refGameScreen16s = useRef(null);
  const refGameScreen17s = useRef(null);
  const refGameScreen18s = useRef(null);
  const refGameScreen19s = useRef(null);
  const refGameScreen20s = useRef(null);
  const refGameScreen21s = useRef(null);
  const refGameScreen22s = useRef(null);
  const refGameScreen23s = useRef(null);
  const refGameScreen24s = useRef(null);
  const refGameScreen25s = useRef(null);

  const [name] = useState(playerName || localStorage.getItem('playerName'))
  const [user, setUser] = useState()
  const [allUsers, setAllUsers] = useState()
  const [building, setBuilding] = useState()
  const [spaceNumber, setSpaceNumber] = useState()
  const [worldDivs, setWorldDivs] = useState()
  const [gameScreen, setGameScreen] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit('get-resources', name)
    }, SAVE_INTERVAL_MS)

    return () => {
      clearInterval(interval)
    }
  }, [socket, user, allUsers, name])

  useEffect (() => {
    socket.once('load-resources', (loadedUser, loadedAllUsers) =>{
      setUser(loadedUser)
      setAllUsers(loadedAllUsers)
    })

  }, [socket, user, allUsers])


  function handleLogout() {
    localStorage.clear()
  }

  useEffect(() => {
    if(allUsers) {

      setWorldDivs(allUsers.map(item => <div className={'user-position-' + item.position} key={item.name}>{item.name}</div>))

      const interval = setInterval(() => {
        setWorldDivs(allUsers.map(item => <div className={'user-position-' + item.position} key={item.name}>{item.name}</div>))
      }, SAVE_INTERVAL_MS)
  
      return () => {
        clearInterval(interval)
      }
    }
  },[socket, user, allUsers])

  const screenWorld = (
    <div className='game-screen-world'>
      {worldDivs}
    </div>
  )

  const screenMessenger = (
    <>
    <div className="game-wall"></div>
      <div className='game-screen-messenger'>

      </div>
    </>
  )

  const screenChooseBuild = (
    <>
    <div className="game-wall"></div>
    <div className="game-screen">
      <input type="checkbox" ref={refGameScreen1s} onChange={handleBuild} className="game-screen-1-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space1.name + 'Lvl' + user.buildings.space1.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen2s} onChange={handleBuild} className="game-screen-2-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space2.name + 'Lvl' + user.buildings.space2.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen3s} onChange={handleBuild} className="game-screen-3-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space3.name + 'Lvl' + user.buildings.space3.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen4s} onChange={handleBuild} className="game-screen-4-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space4.name + 'Lvl' + user.buildings.space4.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen5s} onChange={handleBuild} className="game-screen-5-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space5.name + 'Lvl' + user.buildings.space5.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen6s} onChange={handleBuild} className="game-screen-6-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space6.name + 'Lvl' + user.buildings.space6.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen7s} onChange={handleBuild} className="game-screen-7-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space7.name + 'Lvl' + user.buildings.space7.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen8s} onChange={handleBuild} className="game-screen-8-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space8.name + 'Lvl' + user.buildings.space8.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen9s} onChange={handleBuild} className="game-screen-9-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space9.name + 'Lvl' + user.buildings.space9.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen10s} onChange={handleBuild} className="game-screen-10-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space10.name + 'Lvl' + user.buildings.space10.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen11s} onChange={handleBuild} className="game-screen-11-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space11.name + 'Lvl' + user.buildings.space11.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen12s} onChange={handleBuild} className="game-screen-12-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space12.name + 'Lvl' + user.buildings.space12.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen13s} onChange={handleBuild} className="game-screen-13-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space13.name + 'Lvl' + user.buildings.space13.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen14s} onChange={handleBuild} className="game-screen-14-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space14.name + 'Lvl' + user.buildings.space14.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen15s} onChange={handleBuild} className="game-screen-15-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space15.name + 'Lvl' + user.buildings.space15.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen16s} onChange={handleBuild} className="game-screen-16-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space16.name + 'Lvl' + user.buildings.space16.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen17s} onChange={handleBuild} className="game-screen-17-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space17.name + 'Lvl' + user.buildings.space17.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen18s} onChange={handleBuild} className="game-screen-18-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space18.name + 'Lvl' + user.buildings.space18.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen19s} onChange={handleBuild} className="game-screen-19-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space19.name + 'Lvl' + user.buildings.space19.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen20s} onChange={handleBuild} className="game-screen-20-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space20.name + 'Lvl' + user.buildings.space20.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen21s} onChange={handleBuild} className="game-screen-21-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space21.name + 'Lvl' + user.buildings.space21.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen22s} onChange={handleBuild} className="game-screen-22-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space22.name + 'Lvl' + user.buildings.space22.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen23s} onChange={handleBuild} className="game-screen-23-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space23.name + 'Lvl' + user.buildings.space23.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen24s} onChange={handleBuild} className="game-screen-24-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space24.name + 'Lvl' + user.buildings.space24.lvl + '.png': houseLvl1})`}}></input>
      <input type="checkbox" ref={refGameScreen25s} onChange={handleBuild} className="game-screen-25-s" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space25.name + 'Lvl' + user.buildings.space25.lvl + '.png': houseLvl1})`}}></input>
    </div>
    </>
  )

  function handleBuild(e) {

    let chosenSpace

    if(refGameScreen1s.current.checked && user.buildings.space1.name === 'empty') {
      chosenSpace = 'space1'
    } else if (refGameScreen2s.current.checked && user.buildings.space2.name === 'empty'){
      chosenSpace = 'space2'
    } else if (refGameScreen3s.current.checked && user.buildings.space3.name === 'empty'){
      chosenSpace = 'space3'
    } else if (refGameScreen4s.current.checked && user.buildings.space4.name === 'empty'){
      chosenSpace = 'space4'
    } else if (refGameScreen5s.current.checked && user.buildings.space5.name === 'empty'){
      chosenSpace = 'space5'
    } else if (refGameScreen6s.current.checked && user.buildings.space6.name === 'empty'){
      chosenSpace = 'space6'
    } else if (refGameScreen7s.current.checked && user.buildings.space7.name === 'empty'){
      chosenSpace = 'space7'
    } else if (refGameScreen8s.current.checked && user.buildings.space8.name === 'empty'){
      chosenSpace = 'space8'
    } else if (refGameScreen9s.current.checked && user.buildings.space9.name === 'empty'){
      chosenSpace = 'space9'
    } else if (refGameScreen10s.current.checked && user.buildings.space10.name === 'empty'){
      chosenSpace = 'space10'
    } else if (refGameScreen11s.current.checked && user.buildings.space11.name === 'empty'){
      chosenSpace = 'space11'
    } else if (refGameScreen12s.current.checked && user.buildings.space12.name === 'empty'){
      chosenSpace = 'space12'
    } else if (refGameScreen13s.current.checked && user.buildings.space13.name === 'empty'){
      chosenSpace = 'space13'
    } else if (refGameScreen14s.current.checked && user.buildings.space14.name === 'empty'){
      chosenSpace = 'space14'
    } else if (refGameScreen15s.current.checked && user.buildings.space15.name === 'empty'){
      chosenSpace = 'space15'
    } else if (refGameScreen16s.current.checked && user.buildings.space16.name === 'empty'){
      chosenSpace = 'space16'
    } else if (refGameScreen17s.current.checked && user.buildings.space17.name === 'empty'){
      chosenSpace = 'space17'
    } else if (refGameScreen18s.current.checked && user.buildings.space18.name === 'empty'){
      chosenSpace = 'space18'
    } else if (refGameScreen19s.current.checked && user.buildings.space19.name === 'empty'){
      chosenSpace = 'space19'
    } else if (refGameScreen20s.current.checked && user.buildings.space20.name === 'empty'){
      chosenSpace = 'space20'
    } else if (refGameScreen21s.current.checked && user.buildings.space21.name === 'empty'){
      chosenSpace = 'space21'
    } else if (refGameScreen22s.current.checked && user.buildings.space22.name === 'empty'){
      chosenSpace = 'space22'
    } else if (refGameScreen23s.current.checked && user.buildings.space23.name === 'empty'){
      chosenSpace = 'space23'
    } else if (refGameScreen24s.current.checked && user.buildings.space24.name === 'empty'){
      chosenSpace = 'space24'
    } else if (refGameScreen25s.current.checked && user.buildings.space25.name === 'empty'){
      chosenSpace = 'space25'
    }

    setSpaceNumber(chosenSpace)

    refGameScreen1s.current.checked = false
    refGameScreen2s.current.checked = false
    refGameScreen3s.current.checked = false
    refGameScreen4s.current.checked = false
    refGameScreen5s.current.checked = false
    refGameScreen6s.current.checked = false
    refGameScreen7s.current.checked = false
    refGameScreen8s.current.checked = false
    refGameScreen9s.current.checked = false
    refGameScreen10s.current.checked = false
    refGameScreen11s.current.checked = false
    refGameScreen12s.current.checked = false
    refGameScreen13s.current.checked = false
    refGameScreen14s.current.checked = false
    refGameScreen15s.current.checked = false
    refGameScreen16s.current.checked = false
    refGameScreen17s.current.checked = false
    refGameScreen18s.current.checked = false
    refGameScreen19s.current.checked = false
    refGameScreen20s.current.checked = false
    refGameScreen21s.current.checked = false
    refGameScreen22s.current.checked = false
    refGameScreen23s.current.checked = false
    refGameScreen24s.current.checked = false
    refGameScreen25s.current.checked = false

    if(chosenSpace) {
      setGameScreen(screenVillage)
    }
  }

  useEffect(() => {

    if (name && building && spaceNumber) {
      socket.emit('get-build-something', building, spaceNumber, name)
      setBuilding(null)
      setSpaceNumber(null)
    }

  }, [socket, name, building, spaceNumber])

  function handleBuildSelection(e) {

    let chosenBuilding

    if (refBuilderTower.current.checked) {
      chosenBuilding = 'tower'
    } else if(refBuilderDefenceShop.current.checked) {
      chosenBuilding = 'defence-shop'
    } else if(refBuilderHouse.current.checked) {
      chosenBuilding = 'house'
    } else if(refBuilderFarm.current.checked) {
      chosenBuilding = 'farm'
    } else if(refBuilderWoodCutter.current.checked) {
      chosenBuilding = 'wood-cutter'
    } else if(refBuilderStoneQuarry.current.checked) {
      chosenBuilding = 'stone-quarry'
    } else if(refBuilderCommander.current.checked) {
      chosenBuilding = 'commander'
    }
    
    setBuilding(chosenBuilding)

    refBuilder.current.checked = false
    refMessenger.current.checked = false
    refWorld.current.checked = false
    refBuilderTower.current.checked = false
    refBuilderDefenceShop.current.checked = false
    refBuilderHouse.current.checked = false
    refBuilderFarm.current.checked = false
    refBuilderWoodCutter.current.checked = false
    refBuilderStoneQuarry.current.checked = false
    refBuilderCommander.current.checked = false

    setGameScreen(screenChooseBuild)
  }


  const screenBuilder = (
    <>
    <div className="game-wall"></div>
    <div className='game-screen-builder'>
      <div className='builder-defence'>
        <h2>Defence</h2>
        <input type="checkbox" ref={refBuilderTower} onChange={handleBuildSelection} className='builder-tower'/>
        <input type="checkbox" ref={refBuilderDefenceShop} onChange={handleBuildSelection} className='builder-defence-shop'/>
      </div>
      <div className='builder-economy'>
        <h2>Economy</h2>
        <input type="checkbox" ref={refBuilderHouse} onChange={handleBuildSelection} className='builder-house'/>
        <input type="checkbox" ref={refBuilderFarm} onChange={handleBuildSelection} className='builder-farm'/>
        <input type="checkbox" ref={refBuilderWoodCutter} onChange={handleBuildSelection} className='builder-wood-cutter'/>
        <input type="checkbox" ref={refBuilderStoneQuarry} onChange={handleBuildSelection} className='builder-stone-quarry'/>
      </div>
      <div className='builder-offence'>
        <h2>Offence</h2>
        <input type="checkbox" ref={refBuilderCommander} onChange={handleBuildSelection} className='builder-commander'/>
      </div>
    </div>
    </>
  )

  const screenVillage = (
    <>
    <div className="game-wall"></div>
    <div className="game-screen">
      <button className="game-screen-1" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space1.name + 'Lvl' + user.buildings.space1.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-2" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space2.name + 'Lvl' + user.buildings.space2.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-3" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space3.name + 'Lvl' + user.buildings.space3.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-4" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space4.name + 'Lvl' + user.buildings.space4.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-5" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space5.name + 'Lvl' + user.buildings.space5.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-6" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space6.name + 'Lvl' + user.buildings.space6.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-7" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space7.name + 'Lvl' + user.buildings.space7.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-8" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space8.name + 'Lvl' + user.buildings.space8.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-9" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space9.name + 'Lvl' + user.buildings.space9.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-10" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space10.name + 'Lvl' + user.buildings.space10.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-11" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space11.name + 'Lvl' + user.buildings.space11.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-12" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space12.name + 'Lvl' + user.buildings.space12.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-13" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space13.name + 'Lvl' + user.buildings.space13.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-14" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space14.name + 'Lvl' + user.buildings.space14.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-15" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space15.name + 'Lvl' + user.buildings.space15.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-16" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space16.name + 'Lvl' + user.buildings.space16.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-17" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space17.name + 'Lvl' + user.buildings.space17.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-18" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space18.name + 'Lvl' + user.buildings.space18.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-19" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space19.name + 'Lvl' + user.buildings.space19.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-20" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space20.name + 'Lvl' + user.buildings.space20.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-21" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space21.name + 'Lvl' + user.buildings.space21.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-22" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space22.name + 'Lvl' + user.buildings.space22.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-23" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space23.name + 'Lvl' + user.buildings.space23.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-24" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space24.name + 'Lvl' + user.buildings.space24.lvl + '.png': houseLvl1})`}}></button>
      <button className="game-screen-25" style={{backgroundImage: `url(${user ? process.env.PUBLIC_URL + user.buildings.space25.name + 'Lvl' + user.buildings.space25.lvl + '.png': houseLvl1})`}}></button>
    </div>
    </>
  )

  const refBuilder = useRef(null);
  const refMessenger = useRef(null);
  const refWorld = useRef(null);

    function handleBuilder(e) {
      if (e.target.checked) {
        setGameScreen(screenBuilder)
        refMessenger.current.checked = false
        refWorld.current.checked = false
      } else {
        refMessenger.current.checked = false
        refWorld.current.checked = false
        setGameScreen(screenVillage)
      }
    }

    function handleMessenger(e) {
      if (e.target.checked) {
        setGameScreen(screenMessenger)
        refBuilder.current.checked = false
        refWorld.current.checked = false
      } else {
        refBuilder.current.checked = false
        refWorld.current.checked = false
        setGameScreen(screenVillage)
      }
    }

    function handleWorld(e) {
      if (e.target.checked) {
        setGameScreen(screenWorld)
        refMessenger.current.checked = false
        refBuilder.current.checked = false
      } else {
        refMessenger.current.checked = false
        refBuilder.current.checked = false
        setGameScreen(screenVillage)
      }
    }

  const main = (
    <div className="game-wrapper">
    <p className="game-game">
      <span className="game-wood"><span></span>{user ? user.resources.wood : 'loading'}</span>
      <span className="game-stone"><span></span>{user ? user.resources.stone : 'loading'}</span>
      <span className="game-food"><span></span>{user ? user.resources.food : 'loading'}</span>
      <span className="game-villagers"><span></span>{user ? user.resources.villagers : 'loading'}</span>
      <span className="game-soldiers"><span></span>{user ? user.resources.soldiers : 'loading'}</span>
    </p>

    <div className="game-toolbar">
      <input type="checkbox" ref={refBuilder} onChange={handleBuilder} className="game-builder"></input>
      <input type="checkbox" ref={refMessenger} onChange={handleMessenger} className="game-messenger"></input>
      <input type="checkbox" ref={refWorld} onChange={handleWorld} className="game-world"></input>
    </div>

    {gameScreen}

    <form className="game-logout-form">
        <button type="submit" onClick={handleLogout} className="game-logout-btn"></button>
    </form>
  </div>
  )

  const loadingScreen = (
    <div className="game-loading">
      <h1>Loading...</h1>
    </div>
  )

  return (
    user ? main : loadingScreen
  )
}
