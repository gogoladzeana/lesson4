import './App.css';
import {useState,useMemo} from "react"

function App() {
  const[first,setFirst]=useState(0)
  const[second,setSecond]=useState(0)

  const incrementFirst=()=>{
    setFirst(first+1)
  }

  const incrementSecond=()=>{
    setSecond(second+1)
  }
  const slowFunc=()=>{
    return first > second ? first:second
  }
  const slow=useMemo(()=>slowFunc(),[first,second])

  return (
    <div className="App">
      <div>
        <button onClick={incrementFirst}>First{first}</button>
      </div>

      <div>
        <button onClick={incrementSecond}>Second{second}</button>
      </div>
      {slow}
    </div>
  );
}

export default App;
