
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import './App.css';
import Forgot from './Components/Forgot';
import Home from './Components/Home';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Protectedoute from './Components/Protectedoute';
import Reset from './Components/Reset';
import Signin from './Components/Signin';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
      <Routes>
          <Route path='/' element={<Signin />}></Route>
        <Route element={<Protectedoute />}>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/home' element={<Home />}></Route>
        </Route>
          <Route path='/forgot' element={<Forgot />}></Route>
          <Route path='/:Id/:Token' element={<Reset />}></Route>
      </Routes>
      <ToastContainer/>
    </BrowserRouter>

  );
}

export default App;
