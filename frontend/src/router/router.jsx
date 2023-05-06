import React from 'react';
import { ReactDOM } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from "../components/pages/App"

const Router = () => {
    return ( 
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}/>
            </Routes>
        </BrowserRouter>
     );
}
 
export default Router;