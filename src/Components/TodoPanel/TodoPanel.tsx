import React, { useState } from "react";
import TodoList from "Components/TodoList/TodoList";
import { TextField, Button, Box, Typography, IconButton, Paper} from "@mui/material";
import Modal from '@mui/material/Modal';
import type { Todo } from "../../Pages/TodoApp/TodoApp";
import "./TodoPanel.scss";


interface PanelProps{
  onAddTodo: ({description}: Omit<Todo, 'id' | 'checked' | 'pinned'>) => void
  
}

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
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

const TodoPanel: React.FC<PanelProps> = ({onAddTodo}) => {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [todo, setTodo] = useState("");


  const onCancel = () => {
    setTodo("");
    handleClose();
  };

  const onConfirm =() => {
    setTodo("");
    onAddTodo({description: todo});
    handleClose();
  };
  
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
    const {value} = event.target;
    setTodo(value);
  }

  return (
    <Box className="panel-container">

      
      <Box className="form">
        
        
        <TextField
          size="small"
          id="outlined-basic"
          label="Type Your ToDo"
          variant="outlined"
          value={todo}
          onChange={onChange}
        />
       
        
        <Button size="large" variant="contained" onClick={handleOpen}>Add Note</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography>Are you sure?</Typography>
          
            <Button size="large" variant="contained" onClick={onConfirm}>Add Note</Button>
            <IconButton>
              <Button size="large" variant="contained" onClick={onCancel}>Cancel</Button>
            </IconButton>
          </Box>
        </Modal>
      </Box>

    </Box>
  );
}

export default TodoPanel;
