import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';

function App(): JSX.Element {
  const { state } = useContext(MainStore);
  return (
    <div className="App">
      <h1>{state.title}</h1>
    </div>
  );
}

export default App;
