import React, { useContext } from 'react';
import { MainStore } from '../../store/MainStore';

import { isElectron } from '../../utils/isElectron';
import { UserStore } from '../../store/UserStore';

function App(): JSX.Element {
  const { state } = useContext(MainStore);
  const { userState } = useContext(UserStore);

  React.useEffect(() => {
    if (isElectron()) {
      alert('hello world');
    }
  }, []);
  return (
    <div className="App">
      <h1>{state.title}</h1>
      {userState.firstname && <p>{userState.firstname}</p>}
    </div>
  );
}

export default App;
