import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import App from '../src/Component/App';
import Maincontent from './pages/Maincontent';
import Navmenu01 from './pages/Navmenu01';
import Navmenu02 from './pages/Navmenu02';
import Navmenu03 from './pages/Navmenu03';
import Navmenu04 from './pages/Navmenu04';

function Main(){
    return(
        <BrowserRouter>
        <App>
            <Routes>
                <Route path="/" element={<Maincontent />} />
                <Route path="/nav01" element={<Navmenu01 />} />
                <Route path="/nav02" element={<Navmenu02 />} />
                <Route path="/nav03" element={<Navmenu03 />} />
                <Route path="/nav04" element={<Navmenu04 />} />
            </Routes>
        </App>
        </BrowserRouter>
    )
}

export default Main;