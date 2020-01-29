import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';
import { isElectron } from '../../utils/isElectron';

function App(): JSX.Element {
  const { state } = useContext(MainStore);

  React.useEffect(() => {
    if (isElectron()) {
      alert('hello world');
    }
  }, []);
  return (
    <div className="App">
      <h1>{state.title}</h1>
    </div>
  );
}

export default App;
