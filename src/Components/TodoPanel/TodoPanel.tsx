import React, { useState } from "react";
import TodoList from "Components/TodoList/TodoList";
import { TextField, Button, Box} from "@mui/material";
import type { Todo } from "App/App";
import "./TodoPanel.scss";


interface PanelProps{
  onAddTodo: ({description}: Omit<Todo, 'id' | 'checked' | 'pinned'>) => void
  
}

const TodoPanel: React.FC<PanelProps> = ({onAddTodo}) => {

  const [todo, setTodo] = useState("");
  
  const onClick = () => {
    setTodo("");
    onAddTodo({description: todo});
  };

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const {value} = event.target;
    setTodo(value);
  }

  return (
    <div className="panel-container">

      
      <form className="form">
        
        <TextField
          size="small"
          id="outlined-basic"
          label="Type Your ToDo"
          variant="outlined"
          value={todo}
          onChange={onChange}
        />
        
        <Button size="large" variant="contained" onClick={onClick}>
          Add Note
        </Button>
        
      </form>

    </div>
  );
}

export default TodoPanel;
