import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import {
  Home,
  Movie,
  Settings,
  Signin,
  Signup,
  Test,
  Unknown,
  UserPage,
} from '@internals/pages';

import { AlertContext } from '/src/contexts/alert';

function App() {
  const [alert, setAlert] = useState('');

  return (
    <>
      <AlertContext.Provider value={{ alert, setAlert }}>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/user/:id" element={<UserPage />} />
          <Route path="/movie/:id" element={<Movie />} />
          <Route path="*" element={<Unknown />} />

          <Route path="/test" element={<Test />} />
        </Routes>
      </AlertContext.Provider>
    </>
  );
}

export default App;
