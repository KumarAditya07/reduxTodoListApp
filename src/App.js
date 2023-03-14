import {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { AddTodoAction, RemoveTodoAction } from './action/TodoActions';
import './App.css';

function App() {
   const [todo,setTodo] = useState();
   const disptch = useDispatch();

   //to access our state we use useSelector hook

   const Todo = useSelector(state => state.Todo);
   // taking out todos from todo 

   const {todos} = Todo;

  function handleSubmit(e){
       e.preventDefault();
       disptch(AddTodoAction(todo));

  }

  function removeHandler(t){
    disptch(RemoveTodoAction(t));
  }
  



  return (
    <div className="App">
       <div className='App-header'>
          <h2>Todo List Redux App</h2>

          <form onSubmit={handleSubmit}>
           <input type="text" placeholder='Enter a todo' style={{
            width:350,
            padding:10,
            borderRadius:20,
            border:"none",
            fontSize:20,
           }}
            onChange={(e)=>setTodo(e.target.value)}
           />
           <button type='submit'style={{
           
            padding:12,
            borderRadius:20,
            fontSize:15,
            marginLeft:20,
           }}>Go</button>
          </form>

          <ul className='allTodos'>
          {todos && todos.map((t)=>

            <li key={t.id} className='singleTodo'>
              <span className='todoText'>{t.todo}</span>
              <button style={{
           
            padding:10,
            borderRadius:20,
            border:"1px solid white",
            color:"white",
            backgroundColor:"red",
            marginLeft:20,
           }}
           onClick={()=>removeHandler(t)}
           >Delete</button>
            </li>

          )}
           
          </ul>

       </div>
    </div>
  );
}

export default App;
