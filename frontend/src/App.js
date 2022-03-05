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
import AddEducation from './pages/AddEducation';
import EditEducation from './pages/EditEducation';
import Education from './pages/Education';
import CommonInfections from './pages/CommonInfections';
import IV_Access from './pages/IV_Access';
import Medications from './pages/Medications';

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

        {/*<Route path='/admin-menu' element={<AdminHome />} />
        <Route path='/admin-menu/survey/create-survey' element={<AddSurvey />} />
        <Route path='/admin-menu/survey/edit-survey' element={<EditSurvey />} />
        <Route path='/admin-menu/survey/edit-survey/:id' element={<ManageSurveyPage />} />
        <Route path='/admin-menu/education/create-education' element={<AddEducation />} />
        <Route path='/admin-menu/education/edit-education' element={<EditEducation />} />*/}
        {/* <Route path='/admin-menu/education/edit-education/:id' element={<EditEdicationDetails />} />  */}
        {/*<Route path='/admin-menu/contactus' element={<ViewAllContactUs />} />
        <Route path='/admin-menu/contactus/:id' element={<ContactUsDetails />} />*/}
        <Route path='/education' element={<Education />} />
        <Route path='/education/common-infections' element={<CommonInfections />} />
        <Route path='/education/iv-access' element={<IV_Access />} />
        <Route path='/education/medications' element={<Medications />} />
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
