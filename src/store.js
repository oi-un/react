import { configureStore, createSlice } from '@reduxjs/toolkit'
import user from './store/userSlice';

let stock = createSlice({
  name:'stock',
  initialState:[10, 11, 12]
})

let cart = createSlice({
  name : 'cart',
  initialState :[
    {id : 0, name : 'White and Black', count : 2},
    {id : 2, name : 'Grey Yordan', count : 1}
  ] ,
  reducers : {
    addCount(state, action){
      let index = state.findIndex((a)=>{return a.id === action.payload})
      state[index].count++
    },
    addCart(state, action){
      let index = state.findIndex((item) => {
        return item.id === action.payload.id
      })

      if(index !== -1){
        state[index].count++
      }else{
        state.push(action.payload);
      }
    },
    removeCart(state, action){
      let index = state.findIndex((a) => {return a.id === action.payload})
      console.log(index)
      state.splice(index,1);
    }
  }
})
export let {addCount, addCart, removeCart} = cart.actions

let watched = createSlice({
  name : 'watched',
  initialState : [],
  reducers : {
    watchedItem(state, action){
      let json = localStorage.getItem('watched');
      json = JSON.parse(json);

      json.push(action.payload);
      json = new Set(json);     // Set = 중복 제거
      json = Array.from(json);  // Array.from() array로 만들어줌
      localStorage.setItem('watched', JSON.stringify(json));
    }
  }
})
export let {watchedItem} = watched.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer,
    watched : watched.reducer
  }
}) 