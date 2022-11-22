import React, { useEffect, useState } from 'react'
import { GetList } from '../List/GetList'
import { StarShipsStyled } from './StarShipsStyled';
import { Link } from 'react-router-dom';



export const Starships = () => {

  const [showShips, setShowShips] = useState([]);

  const getShowShips = async() => {
    const newShowShips = await GetList();
    setShowShips(newShowShips);
    
  }

  useEffect(() => {
    getShowShips();
  }, [])
  


  return (
    <>
    <ol>
      {
        showShips.map( item => (
          <StarShipsStyled key={item.name}>
           <Link to={`/app/${item.name}`}> {item.name.toUpperCase()}</Link> 
            <br/>{item.model}
          </StarShipsStyled>
        ))
      }
    </ol>
    </>
  )
}
