// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginForm from './components/loginForm/loginForm';
import StartPage from './components/startPage/startPage';
import NotFound from './components/NotFound/notFound';
import Playlist from './components/playlist/playlist';
import Profile from './components/profilePage/profilePage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/main' element={<StartPage />} />
          <Route path='/' element={<LoginForm />} />
          <Route path='/playlist' element={<Playlist />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;