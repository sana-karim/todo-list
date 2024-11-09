import './AddTodo.css';
import {useState} from 'react';
export const AddTodo = ({onSubmitCall}) => {
    const [textValue, setTextValue] = useState(""); 


    
    const onSubmit = () => {
        onSubmitCall(textValue);
        setTextValue("");
    }

    const onTextChange = (inputValue) => {
        setTextValue(inputValue);

    }

    return(
        <div className="add-container">
            <div className="add-todo-header">Add Todo</div>
            <input type="text" value={textValue} onChange={(e) => onTextChange(e.target.value)} className="add-todo-input" placeholder='Add new todo'></input>
            <button onClick={onSubmit} className='submit-button'>Submit</button>
        </div>
    )
}