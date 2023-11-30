import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Register from './Pages/Register';
import Login from './Pages/Login';
function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/register" exact element={<Register/>}/>
        <Route path="/login" exact element={<Login/>}/>
      </Routes>
    </Router>
    </>
  );
}

export default App;
