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
    addCount(state, id){
      const stateFind = state.find((item) => item.id == id.payload);
      const stateId = stateFind.id;
      console.log(stateId)
    }
  }
})
export let {addCount} = cart.actions

export default configureStore({
  reducer: {
    user : user.reducer,
    stock : stock.reducer,
    cart : cart.reducer
  }
}) 