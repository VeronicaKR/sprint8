import React, { useEffect, useState } from 'react'
import { GetList } from '../List/GetList'
import { StarShipsStyled } from './StarShipsStyled';


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
          <StarShipsStyled key={item.name}>{item.name.toUpperCase()} <br/>{item.model}
          </StarShipsStyled>
        ))
      }
    </ol>
    </>
  )
}
