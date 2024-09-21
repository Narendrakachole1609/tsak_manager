import React from 'react'

const TaskList = ({task,setTask,setEditTask}) => {
    const handleComplete = (todo) => {
        setTask (
            task.map((item)=>{
                if(item.id === todo.id) {
                    return{...item,completed: !item.completed}
                }
                return item;
            })
        );
    };
    const handleEdit = ({id}) => {
        const findTodo = task.find((todo)=>todo.id === id );
        setEditTask(findTodo);   
    }
    const handleDelete = ({id}) => {
        setTask(task.filter((todo)=> todo.id !==id))
    }
  return (
    <div>
      {task.map((todo) => 
      <li className='list-item' key={todo.id}>
       <input 
        type='text'
        value={todo.title}
        className={`list $(todo.completed ? "complete" : "")`}
        onChange={(e) => e.preventDefault()}
       />
       <div> 
       <button className='button-complete task-button'
       onClick={()=>handleComplete(todo)}> 
       <i className='fa fa-check-circle' ></i>
       </button>
       <button className='button-edit task-button'
       onClick={()=>handleEdit(todo)}> 
       <i className='fa fa-edit' ></i>
       </button>
       <button className='button-delete task-button' 
       onClick={()=> handleDelete(todo)}> 
       <i className='fa fa-trash' ></i>
       </button>
       </div>
      </li>
      )}
    </div>
  )
}

export default TaskList
