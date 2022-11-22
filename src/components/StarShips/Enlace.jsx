import React, { useEffect, useState } from 'react'
import { GetList } from '../List/GetList'
import {  useParams } from 'react-router-dom';
import { EnlaceStyled } from './EnlaceStyled';

export const Enlace = ({count}) => {

  const [ship, setShips] = useState();
  const [photo, setPhoto] = useState();
 
  const param = useParams();

  useEffect(() => {
    getShips();
    
  }, [])
  
  useEffect(() => {
    
      if(!ship) return
      setPhoto(ship)
      const url = ship.url
      const numberImg = url[url.length-2];
      setPhoto(numberImg);
    
  }, [ship])



  const getShips = async() => {
    const newShowShips = await GetList(count);
     const ship = newShowShips.find(element => {
        return element.name === param.name
      })
     setShips(ship);     
  }

  
  


  return (
    <>
    < EnlaceStyled className="card" style={{width: "100%"}}>
      


    
    
      { ship && 
      
      <>
      <img src = {`https://starwars-visualguide.com/assets/img/starships/${photo}.jpg`} alt={ship.name}/>
      <div className="card-body ">
        <h1 className="card-title">{ship.name}</h1>
        <h5 className="card-text">{ship.model}</h5>
      </div>
      <div className="row">
      <div className="col-6">
      <ul className="list-group list-group-flush">
        <li className="list-group-item black-li">manufacturer: {ship.manufacturer}</li>
        <li className="list-group-item black-li">cost: {ship.cost_in_credits}</li>
        <li className="list-group-item black-li">passengers: {ship.passengers}</li>
        <li className="list-group-item black-li">class: {ship.starship_class}</li>
      </ul>
    </div>
    <div className="col-6">
    <ul className="list-group list-group-flush">
        <li className="list-group-item black-li">consumables: {ship.consumables}</li>
        <li className="list-group-item black-li">cargo capacity: {ship.cargo_capacity}</li>
        <li className="list-group-item black-li">length: {ship.length}</li>
        <li className="list-group-item black-li">crew: {ship.crew}</li>
      </ul>
 </div>

 </div>    
      </>}
      

</EnlaceStyled>
    </>
  )
}
