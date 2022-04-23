import{ createStore } from 'redux'

const obj={
  movies:[],
  verified:false
}

const reducer =(state=obj,action )=>{
    if (action.type==='add'){
        return {...state,movies:action.payload}
    }
    if (action.type==='loginsucess'){
      return {...state,verified:true}
    }
    if (action.type==='logout'){
      return {...state,verified:false}
    }
    if (action.type==='googlelogin'){
      return {...state,verified:true,image:action.payload}
    }
    return state
}
const store = createStore(reducer)
export default store