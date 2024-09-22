import { Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./Componets/Pages/Home";
import { Navbar } from "./Componets/Navbar";
import { Login } from "./Componets/Pages/Login";
import { Signup } from "./Componets/Pages/Signup";
import { PrivateRoute } from "./Componets/PrivateRoute";
import { Dashboard } from "./Componets/Pages/Dashboard";
import { CreateProject } from "./Componets/Pages/Admin/CreateProject";
import { OnGoingProject } from "./Componets/Pages/Admin/OnGoingProject";
import { CompletedPRojects } from "./Componets/Pages/Admin/CompletedPRojects";
import { AddEmployees } from "./Componets/Pages/Admin/AddEmployees";
import { AddTask } from "./Componets/Pages/Admin/AddTask";
import { CreateTask } from "./Componets/Pages/Admin/CreateTask";
import { Task } from "./Componets/Pages/Employee/Task";
import { WorkingOnTask } from "./Componets/Pages/Employee/WorkingOnTask";
import { ViewTask } from "./Componets/Pages/Admin/ViewTask";
import { SubmitTask } from "./Componets/Pages/Employee/SubmitTask";
import { ProjectOverview } from "./Componets/Pages/Admin/ProjectOverview";

function App() {
  return (
    <div className="w-full bg-richblack-900 min-h-screen">
     <Navbar/>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>

             <Route element={<PrivateRoute><Dashboard/></PrivateRoute>} path="/dashboard">
                 <Route path="/dashboard/createproject" element={<CreateProject/>}/>
                 <Route path="/dashboard/ongoingproject" element={<OnGoingProject/>}/>
                 <Route path="/dashboard/completedproject" element={<CompletedPRojects/>}/>
                 <Route path="/dashboard/addemployees" element={<AddEmployees/>}/>
                 <Route path="/dashboard/addtask" element={<AddTask/>}/>
                 <Route path="/dashboard/createtask" element={<CreateTask/>}/>
                 <Route path="/dashboard/task" element={<Task/>}/>
                 <Route path="/dashboard/workingontask" element={<WorkingOnTask/>}/>
                 <Route path="/dashboard/viewtask" element={<ViewTask/>}/>
                 <Route path="/dashboard/submittask" element={<SubmitTask/>}/>
                 <Route path="/dashboard/projectoverview" element={<ProjectOverview/>}/>
             </Route>

         </Routes>
        
    </div>
  ); 
}
export default App;
