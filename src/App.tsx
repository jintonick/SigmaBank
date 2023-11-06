import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import Authorization from "./components/autorization/authorization";
import MainLayout from "./components/layout/main-layout";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Authorization />} />
        <Route path="/main" element={<MainLayout />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
