import AppName from "./Componant/AppName.jsx";
import AddTodo from "./Componant/AddTodo.jsx";
import TodoItems from "./Componant/TodoItems.jsx";
import WelcomeMessage from "./Componant/WelcomeMessage.jsx";

import "./App.css";
import { useState } from "react";
function App() {
  const todoitems = [
    {
      name: "Buy Milk",
      dueDate: "4/10/23",
    },
    {
      name: "Go to collage",
      dueDate: "4/10/23",
    },
    {
      name: "Like this Video",
      dueDate: "4/10/23",
    },
  ];

  const [todoItems,setTodoItems] = useState([]);
  
  const handleNewItem = (itemname, itemDueDate) =>{
    console.log(`new item added: ${itemname} ${itemDueDate}`);
    const newTodoItem = [...todoItems,{name: itemname,
      dueDate: itemDueDate}];
      setTodoItems(newTodoItem);

  }

  const handleDeleteItem = (todoItemName) => {
      const newTodoItems = todoItems.filter(item => item.name !== todoItemName);
      setTodoItems(newTodoItems);
  }



  return (
    <center className="todo-container">
      <AppName></AppName>
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      <TodoItems todoitems={todoItems} onDeleteClick={handleDeleteItem}></TodoItems>
    </center>
  );
}

export default App;
