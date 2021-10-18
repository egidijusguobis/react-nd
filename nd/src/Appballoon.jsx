// import './App.css';
import Balloon from './Components/Balloon'

const data = new Array(10).fill()

function App() {
  return(
    <>
      <h1>Balloons popped:</h1>
      {data.map((index) => <Balloon key={index}></Balloon>)}
    </>
  
  );
}

export default App;
