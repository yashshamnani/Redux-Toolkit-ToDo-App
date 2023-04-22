import React from 'react'
import { useDispatch } from 'react-redux';
import DoneIcon from '@mui/icons-material/Done';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { markDone } from '../Redux/todoSlice';
import { deleteTodo } from '../Redux/todoSlice';
function TodoItem({id,title,status}) {
  const dispatch = useDispatch();

  function Done(){
    dispatch(markDone({id : id,status :!status}))
  }
  function Delete(){
    dispatch(deleteTodo({id:id}))
  }
  return (
     
    <div className='flex bg-green-600 w-[450px] justify-between mt-1 py-2 px-6 items-center font-semibold rounded-md m-auto mt-3'>
        <div> 
        <span className="mr-8">{title}</span>
        </div>
        <span>
          <span onClick={Done}><DoneIcon /></span>
          {status?null:<span> <EditIcon /></span> }
          <span onClick={Delete}>
            <DeleteIcon />
          </span>
        </span>  
        
       
    </div>
  )
}

export default TodoItem