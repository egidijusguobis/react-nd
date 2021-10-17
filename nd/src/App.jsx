// import './App.css';
import Balloon from './Components/Balloon'

const data = [
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
  {color: 'red'},
]

function App() {
  return(
    <>
    {data.map((balloon, index) => <Balloon key={index} color={balloon.color}></Balloon>)}
    </>
  
  );
}

export default App;
