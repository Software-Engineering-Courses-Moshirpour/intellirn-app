import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateSurvey from './components/CreateSurvey';
import AddSurveyPage from './pages/AddSurveyPage';
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import Help from './pages/Help';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/create-survey' element={<AddSurveyPage />} />
    <Route path='/admin' element={<AdminHome />} />
    <Route path='/education' element={<Help />} />
    <Route path='/' element={<Home />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
