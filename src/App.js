import { BrowserRouter as Router, Routes, Route ,useNavigate, BrowserRouter } from 'react-router-dom';
import Employee from './Components/Employee';
import HomeEmp from './Components/HomeEmp';
import Manager from './Components/Manager';
import HomeManager from './Components/HomeManager';
import Master from './Components/Master';
import Login from './Components/Login';
import Register from './Components/Register';
import FeedBack from './Components/FeedBack';
import Attendance from './Components/Attendance';
import AddTr from './Components/AddTr';
import EditTraining from './Components/EditTraining';
import TrainingData from './Components/TrainingData';
import DeleteTraining from './Components/DeleteTraining';
import DeleteContact from './Components/DeleteEmployee';
import ManagerData from './Components/ManagerData';
import ViewFeedback from './Components/ViewFeedBack';
import EmployeeData from './Components/EmployeeData';
import Logout from './Components/Logout';
import EmployeeDataMgr from './Components/EmployeeDataMgr';
import TrainingRegistration from './Components/TrainingRegistration';
import ViewFeedBack1 from './Components/ViewFeedBack1';
import AcceptOrReject from './Components/AcceptOrReject';
import Attendance1 from './Components/Attendance1';
import TrainingRegistration1 from './Components/TrainingRegistration1';
import Attendance2 from './Components/Attendance2';
import EditContact from './Components/EditEmployee';
import HrHome from './Components/HrHome';
import DeleteEmployee from './Components/DeleteEmployee';
import EditEmployee from './Components/EditEmployee';



const App = () => {
 // const navigate= useNavigate();
function EmployeeElement({ children }) {
  if (sessionStorage.getItem('layout') === 'Employee') {
    return <>{children}</>;
  } else {
    return <Login></Login> ;
  }
}

function HRElement({ children }) {
  if (sessionStorage.getItem('layout') === 'HR') {
    return <>{children}</>;
  } else {
    return <Login></Login> ;
  }
}

function ManagerElement({ children }) {
  if (sessionStorage.getItem('layout') === 'Manager') {
    return <>{children}</>;
  } else {
    return <Login></Login> ;
  }
}
  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        {/* Routes for Employee */}
        <Route index element={<Login />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Register" element={<Register />} />
        <Route path="/HomeEmp" element={<EmployeeElement><Employee /></EmployeeElement>}>
        <Route path="/HomeEmp" element={<HomeEmp />} />
        <Route path="/HomeEmp/EmployeeDataMgr" element={<EmployeeDataMgr />} />
        <Route path="/HomeEmp/TrainingRegistration1" element={<TrainingRegistration1 />} />
        <Route path="/HomeEmp/Attendance2" element={<Attendance2/>} />
        <Route path="/HomeEmp/AcceptOrReject" element={<AcceptOrReject />} />
        <Route path="/HomeEmp/TrainingData" element={<TrainingData />} />
        <Route path="/HomeEmp/HomeEmp" element={<HomeEmp />} />
        <Route path="/HomeEmp/FeedBack" element={<FeedBack />} />
        </Route>
       
        {/* Routes for Manager */}
        <Route path="/HomeManager" element={<ManagerElement><Manager /></ManagerElement>}>
          <Route path="/HomeManager" element={<HomeManager />} />
          <Route path="/HomeManager/EmployeeDataMgr" element={<EmployeeDataMgr />} />
          <Route path="/HomeManager/TrainingRegistration" element={<TrainingRegistration />} />
          <Route path="/HomeManager/ViewFeedBack1" element={<ViewFeedBack1 />} />
          <Route path="/HomeManager/Attendance1" element={<Attendance1 />} />
          <Route path="/HomeManager/AcceptOrReject" element={<AcceptOrReject />} />
        </Route>

        {/* Routes for Hr */}
        <Route path="/HrHome" element={<HRElement><Master /></HRElement>}>
          <Route path="/HrHome" element={<HrHome />} />
          <Route path="/HrHome/Attendance" element={<Attendance />} />
          <Route path="/HrHome/AddTr" element={<AddTr />} />
          <Route path="/HrHome/EditTraining" element={<EditTraining />} />
          <Route path="/HrHome/TrainingData" element={<TrainingData />} />
          <Route path="/HrHome/TrainingData/AddTr" element={<AddTr/>} />
          <Route path="/HrHome/DeleteTraining" element={<DeleteTraining />} />
          <Route path="/HrHome/DeleteEmployee" element={<DeleteEmployee/>} />
          <Route path="/HrHome/ManagerData" element={<ManagerData />} />
          <Route path="/HrHome/ViewFeedBack" element={<ViewFeedback />} />
          <Route path="/HrHome/EmployeeData" element={<EmployeeData />} />
          <Route path="/HrHome/EditEmployee" element={<EditEmployee/>} />
        </Route>

        <Route path="/Logout" element={<Logout />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
