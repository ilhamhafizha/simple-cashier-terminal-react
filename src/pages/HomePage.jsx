import TodoLayout from "../layouts/TodoLayout";

const HomePage = () => {
  return (
    <div style={{ padding: "20px", margin: "auto", width: "500px", textAlign: "center" }}>
      <h1>Welcome to the Home Page</h1>
      <p>Todo App</p>
      <TodoLayout /> 
    </div>
  );
};

export default HomePage;
