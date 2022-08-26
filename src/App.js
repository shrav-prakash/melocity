// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm/loginForm';
import StartPage from './components/startPage/startPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<LoginForm />} />
          <Route path='/' element={<StartPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;