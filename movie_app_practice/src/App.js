import { useState } from "react";




function App() {

  const [toDo, setTodo] = useState("")
  const [toDos, setToDos] = useState([]);
  const onChange = (e) => {

    setTodo(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (toDo === "") return;
    setToDos((currentArray) => [toDo, ...currentArray])
    setTodo("")
  }
  console.log(toDos)

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="write your to do..."
        />
        <button>Add To Do</button>
      </form>
    </div>
  );
}

export default App;
