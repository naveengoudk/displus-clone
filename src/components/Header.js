import React from 'react'
import './header.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import StarIcon from '@mui/icons-material/Star';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux';
import { Avatar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Header() {
    const state =useSelector(state=>state)
    const navigate =useNavigate()
    const dispatch = useDispatch()
    const logoutHandler=()=>{
        navigate('/login')
        dispatch({type:"logout"})
    }

  return (
      <>
   {state.verified?<><nav className='header'>

        <div className='logo'>
            <img src='/images/logo.svg'></img>
        </div>
      
        <div className='navbar'>
        <Link className='link' to={'/'}>
                <HomeIcon></HomeIcon>
                <span>HOME</span>   
            </Link>
            <Link to={'#'}>
                <AddIcon></AddIcon>
                <span>WATCHLIST</span>
            </Link>
            <Link to={'#'}>
                <StarIcon></StarIcon>
                <span>ORIGINALS </span>
            </Link>
            <Link to={'#'}>
                <GroupWorkIcon></GroupWorkIcon>
                <span>MOVIES</span>
            </Link>
            <p className='kidsdiv'>
                <span className='kids'>Kids</span>
            </p>
        </div>

        <div className='searchdiv'>
            <input placeholder='search'></input>
         <SearchIcon></SearchIcon>
        </div>

        <div className='logoutbutton'>
           <button className='logoutbtn' onClick={logoutHandler} >Logout</button>
           <Avatar className='avatar' src={state.image} ></Avatar>
        </div>

    </nav></> :null}
    </>
  )
}
