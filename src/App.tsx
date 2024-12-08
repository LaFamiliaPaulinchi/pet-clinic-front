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
import PetDetail from "./components/pets/PetDetail";
import GuardianDetail from "./components/guardians/GuardianDetail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="guardians" element={<GuardianManager />} />
          <Route path="guardians/:id" element={<GuardianDetail />} />
          <Route path="pets" element={<PetManager />} />
          <Route path="pets/:id" element={<PetDetail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
