import React, {useState} from 'react';
import AddTodo from './components/AddTodo/AddTodo';
import EditModal from './components/EditModal/EditModal';
import TodoList from './components/TodoList/TodoList';


const App = () => {

  const [todos, setTodos] = useState([]);
  const [modal, setModal] = useState(false)
  const [editTodo, setEditTodo] = useState({})

  function handleTask(newObj){
    let newTodos = [...todos];
    newTodos.push(newObj)

    setTodos(newTodos)
    
 }

 function changeStatus(id){
  let newTodos = todos.map(item => {
    if(item.id === id){
      item.status = !item.status
    }
    return item
  })

  setTodos(newTodos)
 }

 function handleDelete(id){
  let newTodos = todos.filter(item => {
    return item.id !== id
  })
  setTodos(newTodos)
 }

 function handleEdit(index){
   setModal(true)
  setEditTodo(todos[index])
 } 

 function handleSaveTask(newTask){
  let newTodos = todos.map(item => {
    if(item.id === newTask.id){
      return newTask
    }
    return item
  })

  setTodos(newTodos)
  setModal(false)
 }

  return (
    <div>
      <AddTodo
      handleTask = {handleTask}
      
      />
      <TodoList
      todos ={todos}
      changeStatus = {changeStatus}
      handleDelete = {handleDelete}
      handleEdit={handleEdit}
      />
      {
        modal ? 
        <EditModal
          editTodo={editTodo}
          handleSaveTask={handleSaveTask}
        /> : null
      }
      
    </div>
  );
};

export default App;
