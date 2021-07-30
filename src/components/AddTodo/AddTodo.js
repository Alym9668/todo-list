import React,{useState} from 'react';

import './AddTodo.css'


const AddTodo = (props) => {

const [task, setTask] = useState('')

const handleInput = (e) =>{
    setTask(e.target.value)
}

const handleAdd = () => {
    const newTask = {
        task,
        status:false,
        id: Date.now()
    }
    props.handleTask(newTask)

    setTask('')
}
    return (
        <div className="add__todo">
            <input value={task} onChange={handleInput} type="text"/>
            <button className="button" onClick={handleAdd}>Add</button>
        </div>
    );
};

export default AddTodo;