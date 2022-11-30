import React from 'react';
import  './App.scss'
import {Routes, Route} from "react-router-dom";
import Project from "./pages/project";
import Tasks from "./pages/tasks";

const App: React.FC = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Project/>} />
                <Route path="/tasks" element={<Tasks/>} />
            </Routes>
        </div>
    );
};

export default App;
