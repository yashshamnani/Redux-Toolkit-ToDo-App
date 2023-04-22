 import React from 'react'
 import {useState} from 'react'
 import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/todoSlice'
 function AddTodo() {
    let [value,setValue] = useState("")
    let dispatch = useDispatch()
function handleClick(e){
  e.preventDefault();
  dispatch(addTodo({title : value}))
  setValue("")
}
   return (
     <div className='flex justify-center'>
        <form> 
         <input className='px-2 py-1 w-[350px] border-none text-black rounded outline-none font-semibold' type="text" placeholder='Enter your Todo' value={value} onChange={(e)=>setValue(e.target.value)}
         >
         </input>
         </form>
         <button className='bg-blue-400 ml-2 px-3 py-1 rounded-sm' onClick={handleClick}>Add Todo</button>
     </div>
   )
 }
 
 export default AddTodo
 