import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateSurvey from './components/CreateSurvey';
import AddSurveyPage from './pages/AddSurveyPage';
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import Help from './pages/Help';
import HelpDetails from './pages/HelpDetails';
import ManageHelp from './pages/ManageHelp';
import ManageSurveyPage from './pages/ManageSurveyPage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/create-survey' element={<AddSurveyPage />} />
    <Route path='/managesurvey' element={<ManageHelp />} />
    <Route path='/managesurvey/:id' element={<ManageSurveyPage />} />
    <Route path='/admin' element={<AdminHome />} />
    <Route path='/help' element={<Help />} />
    <Route path='/help/:id' element={<HelpDetails />} />
    <Route path='/' element={<Home />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
