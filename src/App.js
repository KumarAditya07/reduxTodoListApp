
import './App.css';

function App() {
  return (
    <div className="App">
       <div className='App-header'>
          <h2>Todo List Redux App</h2>

          <form >
           <input type="text" placeholder='Enter a todo' style={{
            width:350,
            padding:10,
            borderRadius:20,
            border:"none",
            fontSize:20,
           }}/>
           <button type='submit'style={{
           
            padding:12,
            borderRadius:20,
            fontSize:15,
            marginLeft:20,
           }}>Go</button>
          </form>

          <ul className='allTodos'>
            <li className='singleTodo'>
              <span className='todoText'>First Todo</span>
              <button style={{
           
            padding:10,
            borderRadius:20,
            border:"1px solid white",
            color:"white",
            backgroundColor:"red",
            marginLeft:20,
           }}>Delete</button>
            </li>
          </ul>

       </div>
    </div>
  );
}

export default App;
