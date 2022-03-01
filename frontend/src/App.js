import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddSurvey from './pages/AddSurvey';
import Home from './pages/Home';
import AdminHome from './pages/AdminHome';
import Survey from './pages/Survey';
import SurveyDetails from './pages/SurveyDetails';
import EditSurvey from './pages/EditSurvey';
import ManageSurveyPage from './pages/ManageSurveyPage';
import Error from './pages/Error';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/survey' element={<Survey />} />
        <Route path='/survey/:id' element={<SurveyDetails />} />
        {/* <Route path='/education' element={<Education />} />
        <Route path='/survey/:id' element={<EducationDetails />} /> */}
        <Route path='/admin-menu' element={<AdminHome />} />
        <Route path='/admin-menu/survey/create-survey' element={<AddSurvey />} />
        <Route path='/admin-menu/survey/edit-survey' element={<EditSurvey />} />
        <Route path='/admin-menu/survey/edit-survey/:id' element={<ManageSurveyPage />} />
        {/* <Route path='/admin-menu/education/create-education' element={<AddEducation />} />
        <Route path='/admin-menu/education/edit-education' element={<EditEducation />} />
        <Route path='/admin-menu/education/edit-education/:id' element={<EditEdicationDetails />} /> */}
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
