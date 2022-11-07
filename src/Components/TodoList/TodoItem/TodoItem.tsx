import React, {useState} from "react";
import { Paper, Box, Typography, IconButton, Checkbox, Modal, Button} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from '@mui/icons-material/Star';
import type { Todo } from 'Pages/TodoApp/TodoApp';


interface TodoItemProps{
  todo: Todo ;
  onDeleteTodo: (id: Todo["id"]) => void;
  onCheckTodo: (id: Todo["id"]) => void;
  onPinTodo: (id: Todo["id"]) => void;
}

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};




const TodoItem: React.FC<TodoItemProps> = ({ todo, onDeleteTodo, onCheckTodo, onPinTodo}) => (
  

  <Paper
    elevation={2}
    sx={{
      width: "fit-content",
      padding: "10px",
      borderRadius: "10px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: "10px",
    }}
  >
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        cursor: "pointer"
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Checkbox {...label} onClick={() => onCheckTodo(todo.id)}/>
        <Typography 
        sx={{
          textDecoration: todo.checked ? "line-through" : "none",
        }}
        >{todo.description}</Typography>
        <Typography></Typography>
      </Box>
      <Box>
        <IconButton color="warning" onClick={() => onPinTodo(todo.id)}>
          {todo.pinned ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>

        <IconButton aria-label="delete" color="error" onClick={() => onDeleteTodo(todo.id)}>
          <DeleteIcon />
        </IconButton>
        
      </Box>
    </Box>
  </Paper>
);

export default TodoItem;
