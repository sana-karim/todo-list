import './App.css';
import { Header } from './components/Header';
import { AddTodo } from './components/AddTodo';
import { TodoItem } from './components/TodoItem';
import { useState } from 'react';
import { TODO_DATA } from './constants/Constant';

function App() {
  const [todoItemData, setTodoItem] = useState(TODO_DATA)

  const generateTodoItem = () => {
    let getTodoArray = [];
    for (let i = 0; i < todoItemData.length; i++) {
      getTodoArray.push(
        <TodoItem
          key={i}
          id={todoItemData[i].id}
          itemData={todoItemData[i].itemData}
          checked={todoItemData[i].checked}
          onClickDeleteCall={onClickDelete}
          onClickStrike={onDoneStrike} />
      )
    }
    return getTodoArray;
  }

  const onDoneStrike = (todoId) => {
    let cpyData = [...todoItemData];
    for (let i = 0; i < cpyData.length; i++) {
      if (cpyData[i].id === todoId) {
        cpyData[i].checked = !cpyData[i].checked;
        setTodoItem(cpyData);
        /* 
        if(cpyData[i].checked == false){
          cpyData[i].checked = true;
          setTodoItem(cpyData)
        } else {
          cpyData[i].checked = false
          setTodoItem(cpyData);
          console.log("false false dalskjdjh")
        } */
      }
    }
  }

  const onClickDelete = (id) => {
    let cpyData = [...todoItemData];
    for (let i = 0; i < cpyData.length; i++) {
      if (cpyData[i].id === id) {
        cpyData.splice(i, 1)
      }
    }
    setTodoItem(cpyData);
  }

  const onSublitClick = (inputValue) => {
    let cpyData = [...todoItemData];
    cpyData.unshift({                 //same as array.push(), but it will add on the starting index
      "id": cpyData.length + 1,
      "itemData": `${inputValue}`,
      "checked": false
    })

    setTodoItem(cpyData)
    console.table(cpyData)
  }

  return (
    <div className="App">
      <div className='parent-container'>
        <Header />
        <AddTodo onSubmitCall={onSublitClick} />
        {generateTodoItem()}
      </div>
    </div>
  );
}

export default App;
