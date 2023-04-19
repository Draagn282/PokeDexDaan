import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {Link, BrowserRouter ,Routes, Route} from "react-router-dom";
import PocketMonster from "./PocketMonster";
import Layout from "./Layout";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
          <BrowserRouter>
          <div className="link_div">
          <Link to="/">Pokemon</Link>
              <Link to="/PocketMonster">details</Link>
          </div>
        <Routes>
              <Route path="/PocketMonster" element={<PocketMonster/>}/>
              <Route path="/" element={<App/>}/>
        </Routes>

        </BrowserRouter>
 
  </React.StrictMode>,
)
