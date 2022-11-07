import React, { useState, useEffect} from "react";
import "./TodoApp.scss";
import TodoPanel from "../../Components/TodoPanel/TodoPanel";
import TodoList from "../../Components/TodoList/TodoList";
import WidgetsPanel from "../../Components/Widgets/WidgetsPanel";
import Modal from "../../Components/Modal/Modal";
import LogIn from "../LogIn/LogIn";
import { Typography, Paper, Box , Switch } from "@mui/material";
import { useTheme, ThemeProvider, createTheme } from '@mui/material/styles';

export type Todo = {
  id: number;
  description: string;
  checked: boolean;
  pinned: boolean;
}

const label = { inputProps: { 'aria-label': 'Switch demo' } };


const TodoApp: React.FC = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light', 
    },
  });



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

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);


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
    <ThemeProvider theme={theme}>
      
    <Paper className="todo-app">
    <Switch checked={darkMode} onChange={()=> setDarkMode(!darkMode)} />
      <Typography></Typography>
      <Box >
        <TodoPanel onAddTodo={onAddTodo} />
        
        <TodoList
          onPinTodo={onPinTodo}
          todoList={todoList}
          onDeleteTodo={onDeleteTodo}
          onCheckTodo={onCheckTodo}
         
        />

      </Box>
      <Paper sx={{
        padding: '20px',
        width: '1000px',
        
        borderRadius: '20px',
        marginLeft: '50px',
        height: 'fit-content',
      }}>
        <WidgetsPanel />
      </Paper>
    </Paper>
    </ThemeProvider>
  );
};

export default TodoApp;
