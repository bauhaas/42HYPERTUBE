import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Home, Signin, Test } from '@internals/pages';

import { AlertContext } from '/src/contexts/alert';

function App() {
  const [alert, setAlert] = useState('');

  return (
    <>
      <AlertContext.Provider value={{ alert, setAlert }}>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </AlertContext.Provider>
    </>
  );
}

export default App;
