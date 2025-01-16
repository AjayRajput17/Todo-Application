import { useState } from "react";
import style from "./AddTodo.module.css";
console.log(style["itemInput"]);
function AddTodo({onNewItem}) {

  const [todoname, setTodoName] = useState();
  const [dueDate,setDueDate] = useState();

  const handleNameChange= (event) => {
    setTodoName(event.target.value);

  }

  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  }

  const handleAddButton = ()=> {
    onNewItem(todoname,dueDate);
    setDueDate("");
    setTodoName("");
    
  }


  return (
    <div className={`${style["item-input"]} container text-center `}>
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Enter Todo Here" value={todoname} onChange={handleNameChange}/>
        </div>
        <div className="col-4">
          <input type="date" value={dueDate} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success aj-button"
          onClick={handleAddButton}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
