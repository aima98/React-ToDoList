import TodosLogic from "./ToDosLogic";
import Header from "./Header";

const TodoApp = () => {
    return (
      <div className="wrapper">
        <div className="todos">
          <Header />
          <TodosLogic />
        </div>
      </div>
    );
  };
  export default TodoApp;
  