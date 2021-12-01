import ReactDOM from 'react-dom'
import {useState} from 'react'
// import App from './App'
const Counter = (props) =>{
  return <h1>{props.number}</h1>
}
const App = (props) =>{
  const [contador,setContador]=useState(12)
  const handleClick = ()=>{
    setContador((previo)=>previo+1)
  }
  const handleClickReset = ()=>{
    setContador(0)
  }
  const isEven = contador % 2 === 0;
  return (
  <div>
    <Counter number={contador}/>
    <p>{isEven ? "Es par" : "Es impar"}</p>
    <button onClick={handleClick}>ClickMe</button>
    <button onClick={handleClickReset}>Reset</button>
  </div>
    )
}



  ReactDOM.render(
    <App />, 
    document.getElementById('root')
  )


