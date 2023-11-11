import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';

import Authorization from "./components/autorization/authorization";
import MainLayout from "./components/layout/main-layout";
import Wiki from "./components/layout/additional/wiki";
import Help from "./components/layout/additional/help";

import { UserProvider } from "./context/UserContext";

import './App.css';

function App() {
  return (
      <UserProvider>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Authorization />} />
                  <Route path="/main" element={<MainLayout />}>
                      <Route path="wiki" element={<Wiki />}/>
                      <Route path="help" element={<Help />}/>
                  </Route>
              </Routes>
          </BrowserRouter>
      </UserProvider>
  );
}

export default App;
