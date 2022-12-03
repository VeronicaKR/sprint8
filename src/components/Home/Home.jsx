import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HomeStyled } from './HomeStyled'

export const Home = () => {
  const navigate = useNavigate();
  return (
    <HomeStyled>WELCOME TO STARWARS PAGE

      <button onClick={() => navigate("/app")}>See ships</button>
    </HomeStyled>
  )
}
