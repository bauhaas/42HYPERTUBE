import { Route, Routes } from 'react-router-dom';

import { Signin } from '@internals/pages';
import { AlertContext } from '/src/contexts/alert';
import { useState } from 'react';

function App() {

  const [alert, setAlert] = useState('');

  return (
    <>
      <AlertContext.Provider value={{ alert, setAlert }}>
        <Routes>
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </AlertContext.Provider>
    </>
  );
}

export default App;
