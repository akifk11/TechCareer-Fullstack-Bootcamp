import LoginComponent from "./components/LoginComponent";
import ProfileComponent from "./components/ProfileComponent";
import ThemeComponent from "./components/ThemeComponent";
import TodoComponent from "./components/TodoComponent";
import TodoListComponents from "./components/TodoListComponents";


function App() {
  return (
    <div className="App">
      <LoginComponent />
      <hr />
      <ProfileComponent />
      <hr />
      <ThemeComponent />
      <hr />
      <TodoComponent />
      <hr />
      <TodoListComponents />
    </div>
  );
}

export default App;
