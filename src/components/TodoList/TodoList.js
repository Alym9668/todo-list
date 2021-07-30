import React from 'react';
import './TodoList.css'
const TodoList = (props) => {


    return (
        <div className="container">
            <ul className="todo__list">
                {props.todos.map((item, index) => (
                    <li id="todo__list-content"
                        key={item.id} 
                        className={item.status ? "complited":"  "}
                    >
                        
                        <div className="todo__list-task">
                            <input onChange={() => props.changeStatus(item.id)} type="checkbox"/>
                            {item.task}
                        </div>

                        <div >
                            <button 
                                className="button" 
                                onClick={() => props.handleEdit(index)}
                             >Edit
                            </button>

                            <button 
                                className="button-close" 
                                onClick={() => props.handleDelete(item.id)}
                             >&times;
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;