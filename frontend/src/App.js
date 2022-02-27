import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import CreateSurvey from './components/CreateSurvey';
import AddSurveyPage from './pages/AddSurveyPage';
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import Survey from './pages/Survey';
import SurveyDetails from './pages/SurveyDetails';
import ManageHelp from './pages/ManageHelp';
import ManageSurveyPage from './pages/ManageSurveyPage';
import Error from './pages/Error';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/create-survey' element={<AddSurveyPage />} />
        <Route path='/managesurvey' element={<ManageHelp />} />
        <Route path='/managesurvey/:id' element={<ManageSurveyPage />} />
        <Route path='/admin-menu' element={<AdminHome />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/survey/:id' element={<SurveyDetails />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
