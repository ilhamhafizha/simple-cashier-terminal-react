import { useState, useRef, useEffect } from "react";
import Swal from "sweetalert2";
const TodoLayout = () => {
  const [todos, setTodos] = useState([]);
  const inputTodo = useRef(null);
  const [_, setCurrentIndex] = useState(null);

  // Mouting terjadi satu kali saat di load
  useEffect(() => {
    setTodos(["Belajar React"]);
  }, []);

  // Updating berulang ulang dieksekusinya
  useEffect(() => {
    Swal.fire({
      title: "Success!",
      text: "Berhasil menambahkan todo!",
      icon: "success",
    });
  }, [todos]);

  // Unmounting terjadi saat komponen dihapus
  useEffect(() => {
    return () => {
      Swal.fire({
        title: "Info",
        text: "Komponen TodoLayout telah dihapus",
        icon: "info",
      });
    };
  }, []);

  const addTodo = () => {
    const newTodo = inputTodo.current.value;
    if (newTodo) {
      setTodos([...todos, newTodo]);
      inputTodo.current.value = "";
    }
  };

  const updateTodo = async (index) => {
    setCurrentIndex(index);
    const { value: updateTodo } = await Swal.fire({
      title: "Mauskan nama baru todo",
      input: "text",
      inputValue: todos[index],
      showCancelButton: true,
      confirmButtonText: "Update",
      cancelButtonText: "Batal",
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      },
    });
    if (updateTodo) {
      const tempTodo = todos;
      tempTodo[index] = updateTodo;
      setTodos([...tempTodo]);
      Swal.fire(`Mengubah todo menjadi ${updateTodo}`, "", "success");
    }
    setCurrentIndex(null);
  };

  const deleteTodo = (index) => {
    setCurrentIndex(index);
    Swal.fire({
      title: "Apakah kamu yakin untuk hapus data?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Ya",
      denyButtonText: `Tidak`,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Data terhapus!", "", "success");
        const newTodo = todos.filter((_, i) => i !== index);
        setTodos(newTodo);
      } else if (result.isDenied) {
        Swal.fire("Data dibatalkan untuk dihapus", "", "info");
      }
      setCurrentIndex(null);
    });
  };

  return (
    <>
      <input style={{ padding: "20px" }} type="text" placeholder="Masukkan todo baru" ref={inputTodo} />

      <button onClick={addTodo} style={{ margin: "5px", padding: "20px" }}>
        Tambah
      </button>

      <ul>
        {todos.map((item, index) => (
          <li key={index} style={{ fontSize: "20px", margin: "10px" }}>
            {item}{" "}
            <button
              onClick={() => updateTodo(index)}
              style={{
                padding: "5px",
                marginLeft: "10px",
                backgroundColor: "blue",
                color: "white",
              }}
            >
              Edit
            </button>
            <button
              onClick={() => deleteTodo(index)}
              style={{
                padding: "5px",
                marginLeft: "10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Hapus
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TodoLayout;
