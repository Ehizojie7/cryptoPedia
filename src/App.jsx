import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import {Routes, Route} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Coins from './Components/Coins';
import CoinDetails from './Routes/CoinDetails';

function App() {
 const [coins, setCoins] = useState([]);

 const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false'

 useEffect(() =>{
  axios.get(URL).then((res)=>{
    setCoins(res.data)
    console.log(res.data[0])
  }).catch((error)=>{
    console.log(error)
  })

 }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/'  element={<Coins coins={coins}/>}/>
        <Route path='/coin' element={<CoinDetails />}>
          <Route path=':coinId' element={<CoinDetails />} />
        </Route>
      </Routes>
      
    </div>
  )
}

export default App
