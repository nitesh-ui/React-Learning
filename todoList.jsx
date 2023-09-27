import { useState } from "react";
import "./styles.css";

function TodoApp() {
  const [item, setItem] = useState("");
  const [todoItem, setToDoItem] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const todoCopy = [...todoItem, item];
    setToDoItem(todoCopy);
    setItem("");
  };

  const handleDelete = (index) => {
    const items = [...todoItem];
    items.splice(index, 1);
    setToDoItem(items);
  };

  return (
    <div>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
      <div>
        {todoItem.map((item, index) => (
          <div key={index} style={{ display: "flex" }}>
            {item}
            <br />
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
export default TodoApp;
