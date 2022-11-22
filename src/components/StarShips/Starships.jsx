import React, { useEffect, useState } from 'react'
import { GetList } from '../List/GetList'
import { StarShipsStyled } from './StarShipsStyled';
import { Link } from 'react-router-dom';



export const Starships = ({count,sum}) => {

  const [showShips, setShowShips] = useState([]);

  const getShowShips = async() => {
    const newShowShips = await GetList(count);
    setShowShips(newShowShips);
    
  }

  useEffect(() => {
    getShowShips();
  }, [count])
  


  return (
    <>
    <ol>
      {
        showShips.map( item => (
          <StarShipsStyled key={item.name}>
           <Link to={`/app/${item.name}`}> {item.name.toUpperCase()}</Link> 
            <br/>{item.model}
            <br/>
            
          </StarShipsStyled>
          
        ))
      }
    </ol>
    <button onClick={sum}>{count}</button>
    </>
  )
}
