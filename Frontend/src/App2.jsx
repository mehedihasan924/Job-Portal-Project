import React from 'react';
import Dashboard from './Component/Pages/Dashboard/Dashboard';
import { Outlet } from 'react-router-dom';

const App2 = () => {
    return (
    <>
        <Dashboard>
        <Outlet></Outlet>
        </Dashboard>
        
    </>
    );
};

export default App2;