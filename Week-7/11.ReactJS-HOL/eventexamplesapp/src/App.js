import React, { useState } from 'react';
import CurrencyConvertor from './CurrencyConvertor';

function App() {
  const [counter, setCounter] = useState(5);

  const handleIncrement = () => {
    setCounter(prev => prev + 1);
    sayHello();
  };

  const sayHello = () => {
    alert("Hello! This is a static message.");
  };

  const handleDecrement = () => setCounter(prev => prev - 1);

  const sayWelcome = (msg) => alert(msg);

  const handleOnPress = () => alert("I was clicked");

  return (
    <div style={{ margin: 20 }}>
      <div style={{ marginBottom: 8 }}>{counter}</div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '8px', width: '145px' }}>
        <button onClick={handleIncrement}>Increment</button>
        <button onClick={handleDecrement}>Decrement</button>
        <button onClick={() => sayWelcome('welcome')}>Say welcome</button>
        <button onClick={handleOnPress}>Click on me</button>
      </div>
      {}
      <div style={{ height: '40px' }} />
      <CurrencyConvertor />
    </div>
  );
}

export default App;
