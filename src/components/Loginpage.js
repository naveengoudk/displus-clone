
import './loginpage.css'
import React, { useReducer } from 'react'
import GoogleIcon from '@mui/icons-material/Google';
import { setUserId } from 'firebase/analytics';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {  getAuth , signInWithEmailAndPassword , signInWithPopup , GoogleAuthProvider} from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate} from 'react-router-dom'



  export default function Loginpage() {
    const auth = getAuth()
    const navigate =useNavigate()
    const [currState ,setState] = React.useState({})
    const globalState = useSelector((state)=>state.verified)
    const dispatch = useDispatch()
    const provider = new GoogleAuthProvider()

    const changeHandler=(e)=>{
      setState((prevState)=>{return {...prevState,[e.target.name]:e.target.value}})
    }
    const submitHandler=()=>{
        signInWithEmailAndPassword(auth ,currState.email ,currState.password)
        .then((resp)=>{
          console.log(resp);
          dispatch({type:'loginsucess'})
        })
        .catch(err=>alert(err.message))
    }

    const googleHandler=()=>{
      signInWithPopup(auth , provider )
      .then(resp=>{
        navigate('/')
        dispatch({type:"googlelogin",payload:resp.user.photoURL})
      })
      .catch(err=>alert(err.message))
    }

  return (
    <>
    <div className='loginpage'>
      <div className='signinbox'>
      <label htmlFor='Email' >Email</label>
      <input onChange={changeHandler} type={'email'} required name='email' ></input>
      <label htmlFor='password'>Password</label>
      <input onChange={changeHandler} type={'password'} required name='password' ></input>
      <button onClick={submitHandler} type='submit' className='btn'>LOGIN</button>
      <div className='google-login'>
      <p>OR</p>
      <p>Login With</p>
      <div onClick={googleHandler} className='googleicon'><GoogleIcon/> </div>
      </div>
      </div>
    </div>
    </>
  )
}

