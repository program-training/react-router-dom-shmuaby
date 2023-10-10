import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllUsersPage from "./components/AllUsersName/AllUsers";
import UserDetail from "./components/UserDetails/OneUser";
import UserTasks from "./components/TodoDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AllUsersPage />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/user/:userId/tasks" element={<UserTasks />} />
      </Routes>
    </Router>
  );
}

export default App;
