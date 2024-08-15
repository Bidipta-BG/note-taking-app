import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import NotesPage from "./pages/NotesPage";
import Cookies from 'js-cookie';


const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/notes" element={Cookies.get("token") ? <NotesPage /> : <Login />} />
    </Routes>
  </BrowserRouter>
);

export default App;
