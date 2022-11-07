import React from "react";
import TodoItem from "./TodoItem/TodoItem";
import type { Todo } from "../../Pages/TodoApp/TodoApp";
import { Box } from "@mui/material";

interface TodoListProps {
  todoList: Todo[];
  onDeleteTodo: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onPinTodo: (id: Todo["id"]) => void;
}

const TodoList: React.FC<TodoListProps> = ({
  todoList,
  onDeleteTodo,
  onCheckTodo,
  onPinTodo,
}) => (
  <Box
    sx={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    }}
  >
    {todoList.map((todo) => (
      <TodoItem
        todo={todo}
        key={todo.id}
        onDeleteTodo={onDeleteTodo}
        onCheckTodo={onCheckTodo}
        onPinTodo={onPinTodo}
      />
    ))}
  </Box>
);
export default TodoList;
