import './TodoItem.css';
const done = require('../assets/done.png');
const cross = require('../assets/cross.png');
export const TodoItem = ({ id, itemData, checked, onClickDeleteCall, onClickStrike }) => {
    const onDelete = () => {
        onClickDeleteCall(id)
    }

    const onStrike = () => {
        onClickStrike(id)
        console.log("hello")
    }


    return (
        <div className="todo-data-parent">
            <div className="todo-data" style={checked ? { textDecoration: "line-through" } : {}}>{itemData}</div>
            <div className="action-buttons">
                <div className="done-button" onClick={onStrike}><img className='done-button-img' src={done} alt='icon' /></div>
                <div className='delete-button' onClick={onDelete}><img className='delete-button-img' src={cross} alt='icon' /></div>
            </div>
        </div>
    )
}