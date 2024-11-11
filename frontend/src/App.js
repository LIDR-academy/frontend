import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddCandidate from './components/AddCandidateForm';
import InterviewProcess from './components/InterviewProcess/InterviewProcess';
import Positions from './components/Positions';
import RecruiterDashboard from './components/RecruiterDashboard';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RecruiterDashboard />} />
        <Route path="/add-candidate" element={<AddCandidate />} /> {/* Agrega esta línea */}
        <Route path="/positions" element={<Positions />} />
        <Route path="/positions/:id" element={<InterviewProcess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
