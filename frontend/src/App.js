import "./App.css";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import { Login } from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequiredAuth from "./components/RequiredAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <RequiredAuth>
              <Home />
            </RequiredAuth>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
