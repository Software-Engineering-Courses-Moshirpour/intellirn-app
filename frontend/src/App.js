import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import AddSurvey from './pages/AddSurvey';
import EditSurvey from './pages/EditSurvey';
import SurveyDetails from './pages/SurveyDetails';
import AdminHome from './pages/AdminHome';
import ManageSurveyPage from './pages/ManageSurveyPage';
import ContactUs from './pages/ContactUs';
import ViewAllContactUs from './pages/ViewAllContactUs';
import ContactUsDetails from './pages/ContactUsDetails';
import { RequireAuth } from './components/RequireAuth';
import Login from './pages/Login';
import Error from './pages/Error';

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
        <Route path='/education/:id' element={<EducationDetails />} /> */}
        <Route path='/admin-menu' element={<RequireAuth><AdminHome /></RequireAuth>} />
        <Route path='/admin-menu/survey/create-survey' element={<RequireAuth><AddSurvey /></RequireAuth>} />
        <Route path='/admin-menu/survey/edit-survey' element={<RequireAuth><EditSurvey /></RequireAuth>} />
        <Route path='/admin-menu/survey/edit-survey/:id' element={<RequireAuth><ManageSurveyPage /></RequireAuth>} />
        {/* <Route path='/admin-menu/education/create-education' element={<RequireAuth><AddEducation /></RequireAuth>} />
        <Route path='/admin-menu/education/edit-education' element={<RequireAuth><EditEducation /></RequireAuth>} />
        <Route path='/admin-menu/education/edit-education/:id' element={<RequireAuth><EditEdicationDetails /></RequireAuth>} /> */}
        <Route path='/admin-menu/contactus' element={<RequireAuth><ViewAllContactUs /></RequireAuth>} />
        <Route path='/admin-menu/contactus/:id' element={<RequireAuth><ContactUsDetails /></RequireAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
