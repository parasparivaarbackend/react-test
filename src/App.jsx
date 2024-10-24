import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFOund from "./pages/NotFound";
import { GoogleOAuthProvider } from "@react-oauth/google";

function App() {
  const GoogleAuthWrapper = () => {
    return (
      <GoogleOAuthProvider clientId="652163849666-nimendrfkbjf1mipkvmo8qo5aus72epm.apps.googleusercontent.com">
        <Login></Login>
      </GoogleOAuthProvider>
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<GoogleAuthWrapper />}></Route>
        <Route path="/" element={<Navigate to={`/login`} />}></Route>
        <Route path="/dashboard" element={<Dashboard />}></Route>
        <Route path="*" element={<NotFOund />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
