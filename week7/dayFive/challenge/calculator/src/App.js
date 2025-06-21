import React, { useState } from 'react';
import './index.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');
  const [operation, setOperation] = useState('+');

  const calculate = () => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    if (isNaN(a) || isNaN(b)) {
      setResult("Please enter valid numbers.");
      return;
    }

    let res;
    switch (operation) {
      case '+':
        res = a + b;
        break;
      case '-':
        res = a - b;
        break;
      case '*':
        res = a * b;
        break;
      case '/':
        res = b !== 0 ? a / b : "Can't divide by zero";
        break;
      default:
        res = "Invalid operation";
    }
    setResult(res);
  };

  return (
    <div className="app-container">
      <h1>Adding Two Numbers</h1>
      <div className="input-section">
        <input
          type="number"
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
          placeholder="First Number"
        />
        <input
          type="number"
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
          placeholder="Second Number"
        />
      </div>

      <select
        value={operation}
        onChange={(e) => setOperation(e.target.value)}
        className="operation-select"
      >
        <option value="+">➕ Add</option>
        <option value="-">➖ Subtract</option>
        <option value="*">✖ Multiply</option>
        <option value="/">➗ Divide</option>
      </select>

      <button className="calc-button" onClick={calculate}>Calculate</button>

      <div className="result">{result !== '' && <h2>{result}</h2>}</div>
    </div>
  );
}

export default App;