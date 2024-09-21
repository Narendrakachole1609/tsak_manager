import React, {useEffect} from 'react';
import {v4 as uuidv4} from "uuid";

export default function Form({input,setInput,task,setTask,editTask,setEditTask}) {
    
    const updateTodo = (title,id,completed) => {
     const newTodo = task.map((todo)=> 
      todo.id === id ? {title,id, completed} : todo
    );
    setTask(newTodo);
    setEditTask("");
    };
    useEffect (() => {
        if (editTask) {
            setInput(editTask.title);
        } else {
            setInput("");
        }
    },[setInput,editTask])

    const onInputChange = (e) => {
        setInput(e.target.value);
    };
    const onFormSubmit = (e) => {
        e.preventDefault();
        if(!editTask) {
        setTask([...task, { id:uuidv4(), title:input, complete:false}]);
        setInput("");
        }
        else{
            updateTodo(input,editTask.id,editTask.completed)
        }
    };
  return (
   <form onSubmit={onFormSubmit}>
    <input type='text' 
    placeholder='Enter a task...' 
    className='task-input'
    value={input}
    required
    onChange={onInputChange}     
    />
    <button type='submit' className='button-add'>
        {editTask ? 'OK' : "Add"}
    </button>
   </form>
  )
}
