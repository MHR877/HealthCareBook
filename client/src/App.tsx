import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useUserStore from "./store/useUserStore";
import DoctorHome from "./pages/DoctorHome";
import PatientHome from "./pages/PatientHome";

function App() {
  const { user } = useUserStore((state) => state);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              user?._id ? (
                user.type == "patient" ? (
                  <PatientHome />
                ) : (
                  <DoctorHome />
                )
              ) : (
                <Home />
              )
            }
          />
          <Route path="/auth/login" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          {/* <Route component={NotFound} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
