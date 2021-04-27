import { useState } from 'react';
import './App.css';
import Test from './components/Test';

function App() {
  const [toggle, setToggle] = useState(true);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className='App'>
      <button type='button' onClick={handleToggle}>
        Toggle
      </button>
      {toggle && <Test />}
    </div>
  );
}

export default App;
