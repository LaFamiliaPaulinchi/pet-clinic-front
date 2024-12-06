import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./components/Dashboard";
import GuardianManager from "./components/guardians/GuardianManager";
import PetManager from "./components/pets/PetManager";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="guardians" element={<GuardianManager />} />
          <Route path="pets" element={<PetManager />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
