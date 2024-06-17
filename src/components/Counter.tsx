import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../redux/store'
import { decrement, increment } from '../redux/slices/counterSlice';


const Counter = () => {
    const counter = useSelector((state: RootState) => state.counterSlice.value);
    const dispatch = useDispatch()
  return (
      <div>Counter :  {counter}
          <br />
          <button onClick={()=>{dispatch(increment())}}> Add 1 </button>
          <button onClick={()=>{dispatch(decrement())}}> reduce 1 </button>          
      
      </div>
  )
}

export default Counter