import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./supervisor/home/SupervisorHome";
import Login from "./login/Login";
import Register from "./register/Register";
import HeadOfDepartmentHome from "./headOfDepartment/home/HeadOfDepartmentHome";
import ProfessorHome from "./professor/home/ProfessorHome";
import StudentHome from "./student/home/StudentHome";
import HeadOfDeptList from "./supervisor/headOfDeptList/HeadOfDeptList";
import ProfList from "./supervisor/profList/ProfList";
import StudnetList from "./supervisor/stdList/StudentList";
import RequestList from "./supervisor/requestsList/RequestList";
import RequestsList from "./student/requestsList/RequestsList";
import StudentFyp from "./student/studentfypList/StudentFyp";
import StudentProfile from "./student/profile/StudentProfile";
import PasswordStd from "./student/changePassword/PasswordStd";
import ProfessorMyFyp from "./professor/myFyp/ProfessorMyFyp";
import NewFyp from "./professor/newFyp/NewFyp";
import ProfFypRequest from "./professor/requests/ProfFypRequest";
import ProfessorProfile from "./professor/profile/ProfessorProfile";
import PasswordProf from "./professor/changePassword/PasswordProf";
import HoDMyFyp from "./headOfDepartment/myFyp/HoDMyFyp";
import HoDnewFyp from "./headOfDepartment/newFyp/HoDnewFyp";
import HoDrequests from "./headOfDepartment/requests/HoDrequests";
import PrivateRoute from "./assets/PrivateRoute";
import NotFound from "./notFound/NotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" element={<NotFound />} />

          <Route path="/supervisor" element={<PrivateRoute allowedRole={0} />}>
            <Route index element={<AdminHome />} />
            <Route path="headOfDeptList" element={<HeadOfDeptList />} />
            <Route path="profList" element={<ProfList />} />
            <Route path="studentList" element={<StudnetList />} />
            <Route path="requestList" element={<RequestList />} />
          </Route>

          <Route
            path="/headOfDepartment"
            element={<PrivateRoute allowedRole={1} />}
          >
            <Route index element={<HeadOfDepartmentHome />} />
            <Route path="myFyps" element={<HoDMyFyp />} />
            <Route path="newfyp" element={<HoDnewFyp />} />
            <Route path="requests" element={<HoDrequests />} />
          </Route>

          <Route path="/professor" element={<PrivateRoute allowedRole={2} />}>
            <Route index element={<ProfessorHome />} />
            <Route path="myFyps" element={<ProfessorMyFyp />} />
            <Route path="newfyp" element={<NewFyp />} />
            <Route path="requests" element={<ProfFypRequest />} />
            <Route path="profile" element={<ProfessorProfile />} />
            <Route path="password" element={<PasswordProf />} />
          </Route>

          <Route path="/student" element={<PrivateRoute allowedRole={3} />}>
            <Route index element={<StudentHome />} />
            <Route path="requestsList" element={<RequestsList />} />
            <Route path="fyps" element={<StudentFyp />} />
            <Route path="profile/:profileId" element={<StudentProfile />} />
            <Route path="password" element={<PasswordStd />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
