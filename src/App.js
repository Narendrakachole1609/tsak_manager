import './App.css'
import React,{useState} from 'react'
import Header from './component/Header';
import Form from './component/Form';
import TaskList from './component/TaskList';


export default function App() {
  const [input,setInput] = useState("");
  const [task, setTask] = useState([]);
  const [editTask,setEditTask] = useState(null)
  return (
    <div className='container'>
      <div className='app-wrapper'>
      <div>
        <Header />
      </div>
      <div>
        <Form 
          input={input}
          setInput={setInput}
          task = {task}
          setTask = {setTask}
          editTask = {editTask}
          setEditTask = {setEditTask}
        />
      </div>
      <div>
        <TaskList 
          task = {task}
          setTask = {setTask} 
          setEditTask = {setEditTask}
          />
      </div>
      </div>
    </div>
  )
}
