import { useState } from 'react'
import './app.css'

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState("");

  const handleAddtion = () => {
    let res = parseFloat(num1) + parseFloat(num2);
    setResult(res);
  }

  const handleSubtraction = () => {
    let res = parseFloat(num1) - parseFloat(num2);
    setResult(res);
  }

  const handleMultiplication = () => {
    let res = parseFloat(num1) * parseFloat(num2);
    setResult(res);
  }

  const handleDivision = () => {
    let res = parseFloat(num1) / parseFloat(num2);
    setResult(res);
  }

  const clearAll = () => {
    setNum1("");
    setNum2("");
    setResult("");
  }

  return (
    <div className='calculator container'>
      <h1>Basic Calculator</h1>
      <input 
        type="number" 
        value={num1} 
        placeholder='Enter first number'
        onChange={(e) => setNum1(e.target.value)} 
      />
      <input 
        type="number" 
        value={num2}
        placeholder='Enter second number' 
        onChange={(e) => setNum2(e.target.value)} 
      />
      <br />

      <button onClick={handleAddtion}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
      <button onClick={handleMultiplication}>Multiplication</button>
      <button onClick={handleDivision}>Division</button>
      <button onClick={clearAll}>Clear All</button>


      <h3>Result: <span>{result}</span></h3>
    </div>
  )
}

export default App
