
import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { db } from "./firebaseconfig"
import firebase from "firebase"
import TodoListItem from './Todo';




function App() {
const [todos, setTodos] = useState([])
const [todoInput, settodoInput] = useState("");

useEffect(() => {
 getTodos();
}, []) //left blank to run only on first load

function getTodos() {
  db.collection("todos").onSnapshot(function (querySnapshot) {
  setTodos(
    querySnapshot.docs.map((doc) => ({
      id: doc.id,
      todo: doc.data().todo,
      inprogress: doc.data().inprogress
    }))
  );
  })
}

function addTodo(e) {
      e.preventDefault();

      db.collection("todos").add({
        inprogress: true,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        todo: todoInput,
      });

      settodoInput("");

}

  return (
    <div 
      className="App" 
      style={{
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "center",
        alignItems: "center"
      }}>


      <div>
      <h1>Alan's Test Todo Application 🔥</h1>
      <form>
      <TextField id="standard-basic" 
      label="Write a todo!" 
      value={todoInput}
      onChange={(e) => settodoInput(e.target.value)}

      style={{maxWidth:"300px", width:"90vw"}}
      />
      <Button type="submit" variant="contained" onClick={addTodo}>
        Add Todo
        </Button>
      </form>

      {todos.map((todo) => (
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}
        />
      ))}


      </div>  
    </div>
  );
}

export default App;
