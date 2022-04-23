import React from 'react'
import './home.css'
import Imageslider from './Imageslider'
import Displaymovies from './Displaymovies'
import { useNavigate } from 'react-router-dom'
import Loginpage from './Loginpage'
import { useSelector } from 'react-redux'

export default function Home() {
  const val = useSelector((state)=>state.verified)
  const navigate = useNavigate()
  return (
    <>
    {val? <div className='home'>
      <Imageslider/>
      <Displaymovies/></div>:<Loginpage/>}
    </>
    
  )
}
