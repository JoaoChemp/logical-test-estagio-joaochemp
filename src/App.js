import React, { useState } from 'react';
import './App.css'; 

function App() {
  const [msg, setMsg] = useState('');

  const calculateInt = (value, divisor) => {
    value = parseInt(value);
    divisor = parseInt(divisor);

    const result = value / divisor;
    let minValue, maxValue;
    let msg = '';

    for (let i = 0; i < divisor; i++) {
      if (i === divisor - 1) {
        minValue = result * i;
        maxValue = minValue + result;
      } else {
        minValue = result * i;
        maxValue = minValue + result - 1;
      }

      msg += `De ${minValue} a ${maxValue}<br>`;
    }

    setMsg(msg);
  };

  const calculateFloat = (value, divisor) => {
    value = parseFloat(value);
    divisor = parseFloat(divisor);

    const result = value / divisor;
    let minValue, maxValue;
    let msg = '';

    for(let i = 0; i < divisor; i++) {

      if(i == (divisor - 1)) {      // usei um if para descobrir se o loop estava no final
          minValue = (result * i);
          maxValue = minValue + result;
          msg += "De " + (Math.round(minValue * 10) / 10) + " a " + (Math.round(maxValue * 10) / 10) + "<br>";
      } else {
          minValue = (result * i);
          maxValue = (minValue + result) - 0.1;
          msg += "De " + (Math.round(minValue * 10) / 10) + " a " + (Math.round(maxValue * 10) / 10).toFixed(1) + "<br>";
      }
  }

    setMsg(msg);
  };

  const handleButtonClick = () => {
    const value = document.querySelector('#input_valor').value;
    const divisor = document.querySelector('#input_divisor').value;
    setMsg('');

    if (value % divisor === 0) {
      calculateInt(value, divisor);
    } else {
      calculateFloat(value, divisor);
    }
  };

  return (
    <div className="App">
      <main>
        <article>
          <h1>
            Desafio <span>dev</span>
          </h1>
          <label htmlFor="input_valor">Valor:</label>
          <input type="number" name="valor" id="input_valor" />
          <label htmlFor="input_divisor">Divisor:</label>
          <input type="number" name="valor" id="input_divisor" />
          <button onClick={handleButtonClick}>Enviar</button>
          <p dangerouslySetInnerHTML={{ __html: msg }} />
        </article>
      </main>
    </div>
  );
}

export default App;
