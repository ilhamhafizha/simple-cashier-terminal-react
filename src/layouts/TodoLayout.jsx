import { useState } from "react";

const TodoLayout = () => {
  const [todos, setTodos] = useState(["Belajar React", "Belajar Vite", "Belajar Tailwind CSS"]);

  return (
    <>
      <input style={{ padding: "20px" }} type="text" placeholder="Masukkan todo baru" />

      <button style={{ margin: "5px", padding: "20px" }}>Tambah</button>

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
