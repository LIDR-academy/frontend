import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Positions from './components/Positions';
import Position from './components/Position';

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Positions />} />
                <Route path="/position/:id" element={<Position />} />
            </Routes>
        </Router>
    );
};

export default App;
