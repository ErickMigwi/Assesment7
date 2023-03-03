import './App.css';
import Question1 from './Question1';
import Question2 from './Question2';
import Question3 from './Question3';
import Question4 from './Question4';
function App() {
  return (
    <div className="App">
      <h1>Assement7</h1>
      <h1>Question1</h1>
     <Question1/>
     <h1>Question2</h1>
     <Question2 name=  {'Erick'}/>
     <h1>Qusttion3</h1>
     <Question3/>
     <h1>Qusttion4</h1>
     <Question4/>
    </div>
  );
}

export default App;
