import { useState, useRef } from "react";
import Swal from "sweetalert2";
const TodoLayout = () => {
  const [todos, setTodos] = useState(["Belajar React"]);
  const inputTodo = useRef(null);

  const addTodo = () => {
    const newTodo = inputTodo.current.value;
    if (newTodo) {
      setTodos([...todos, newTodo]);
      inputTodo.current.value = "";
      Swal.fire({
        title: "Succes",
        text: "Berhasil menambahkan Todo",
        icon: "success",
      });
    }
  };

  return (
    <>
      <input style={{ padding: "20px" }} type="text" placeholder="Masukkan todo baru" ref={inputTodo} />

      <button onClick={addTodo} style={{ margin: "5px", padding: "20px" }}>
        Tambah
      </button>

      {todos.map((item, index) => (
        <ul>
          <li key={index} style={{ fontSize: "20px" }}>
            {item}
          </li>
        </ul>
      ))}
    </>
  );
};

export default TodoLayout;
