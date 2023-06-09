import React from 'react'
import { Link } from 'react-router-dom'
import CoinDetails from '../Routes/CoinDetails';
import CoinItem from './CoinItem'
import './Coins.css';

const Coins = (props) => {

  return (
    <div className='container'>
        <div>
            <div className='heading'>
                <p>#</p>
                <p className='coin-name'>Coin</p>
                <p>Price</p>
                <p>24h</p>
                <p className='hide-mobile'>Volume</p>
                <p className='hide-mobile'>Market Cap</p>
            </div>

           {props.coins.map(coins =>{

        return (
    <Link to={`/coin/${coins.id}`} element={<CoinDetails />} key={coins.id}>
        <CoinItem coins={coins} />
    </Link>

    )

           })}
            </div>


    </div>
  )
}

export default Coins