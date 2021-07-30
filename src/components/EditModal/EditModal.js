import React, { useState } from 'react';

import './EditModal.css'
const EditModal = (props) => {
    const [item, setItem] =useState(props.editTodo)

    function handleInput(e){
        let newObj ={...item}
        newObj.task = e.target.value
       setItem(newObj) 
    }

    function handleSave(){
        props.handleSaveTask(item)
        
    }
    return (
        <div className="main-modal">
            <div className="inner-modal">
                <div className="close">
                    <button className="button-close" onClick={() => props.setModal(false)}>&times;</button>
                </div>

                <input 
                    onChange={handleInput}
                    type="text" 
                    value={item.task} 
                    className="inp-edit"
                />
                
                <button className="button" onClick={handleSave}>Save</button>
            </div>
            
        </div>
    );
};

export default EditModal;