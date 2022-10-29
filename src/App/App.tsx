import React, { useState, useEffect} from "react";
import "./App.scss";
import TodoPanel from "../Components/TodoPanel/TodoPanel";
import TodoList from "../Components/TodoList/TodoList";
import WidgetsPanel from "../Components/Widgets/WidgetsPanel";

export type Todo = {
  id: number;
  description: string;
  checked: boolean;
  pinned: boolean;
}


const App: React.FC = () => {

  const [todoList, setTodoList] = useState([
    { id: 1, description: "test1", checked: false, pinned: false },
    { id: 2, description: "test2", checked: false, pinned: false },
    { id: 3, description: "test3", checked: false, pinned: false }
  ]);



  const onDeleteTodo = (id: Todo["id"]) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const onAddTodo = ({
    description,
  }: Omit<Todo, "id" | "checked" | "pinned">) => {
    setTodoList([
      ...todoList,
      {
        id: todoList[todoList.length - 1].id + 1,
        description,
        checked: false,
        pinned: false,
      },
    ]);
  };

  // add function to add new todo to local storage
  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  // get local todos
  

// pin todo and move it to the top of the list and unpin it and move it  below last pinned todo
const onPinTodo = (id: Todo["id"]) => {
  const todo = todoList.find((todo) => todo.id === id);
  if (todo) { 
    if (todo.pinned) {
      setTodoList([
        ...todoList.filter((todo) => todo.id !== id),
        { ...todo, pinned: false },
      ]);
    } else {
      setTodoList([
        { ...todo, pinned: true },
        ...todoList.filter((todo) => todo.id !== id),
      ]);
    }
  }
}; 


  const onCheckTodo = (id: Todo["id"]) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      })
    );
  };



  return (
    <div className="app">
      <div className="todo-app-container">
        <TodoPanel onAddTodo={onAddTodo} />
        
        <TodoList
          onPinTodo={onPinTodo}
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
         
        />

      </div>
      <div className="widgets-container">
        <WidgetsPanel />
      </div>
    </div>
  );
};

export default App;
