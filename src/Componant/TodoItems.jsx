import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
console.log(styles.itemsContainer);
const TodoItems = ({ todoitems, onDeleteClick }) => {
  return (
    <div className={styles["items-container"]}>
      {todoitems.map((itme) => (
        <TodoItem
          key={itme.name}
          todoName={itme.name}
          todoDate={itme.dueDate}
          onDeleteClick={onDeleteClick}
        ></TodoItem>
      ))}
    </div>
  );
};
export default TodoItems;
