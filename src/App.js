import './App.css';
import Landing from "./pages/Landing";
import {Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import Registration from "./pages/Auth/Registration";
import Main from "./pages/Main";
import Creator from "./pages/Creator";

function App() {
  return (
    <Routes>

        <Route path="/home" element={<Main/>}/>
        <Route path="/create" element={<Creator/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/registration" element={<Registration/>}/>

        <Route path="/" element={<Landing/>}/>
    </Routes>
  );
}

export default App;
