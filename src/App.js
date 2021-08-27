import { useState } from 'react'
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Lunch Date',
      day: 'Feb 14th at 12:30pm',
      reminder: true
    },
    {
      id: 2,
      text: 'work meeting',
      day: 'Feb 15th at 3:00pm',
      reminder: true
    },
    {
      id: 3,
      text: 'baseball game',
      day: 'Feb 16th at 7:30pm',
      reminder: false
    }
  ])
  //add task
  const addTask =(task) => {
    const id = Math.floor(Math.random() * 10000) + 1

    const newTask = { id, task} 
    setTasks([task, newTask])
  }

  //delete task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  //toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id 
    ? {...task, reminder: !task.reminder}: task
    ))
  }

  return (
    <div className="container">
     <Header onAdd={() => 
      setShowAddTask(!showAddTask)} 
      showAdd={showAddTask}
      />
     {showAddTask && <AddTask onAdd={addTask} 
     />}
     {tasks.length > 0 ? (
     <Tasks 
     tasks={tasks} 
     onDelete={deleteTask} 
     onToggle={toggleReminder}
     />):
     ('No tasks to show!')}
    </div>
  );
}

export default App;
