import React from 'react';
import './layout.css';

function Sidebar() {
    const userLogged = JSON.parse(localStorage.getItem("userdata"));

    return (
        <div className="col-2">
        <div className="dashboard-sidebar">
            <div className="dashboard-user-image">
                <img src={`${global.config.apiUrl}${userLogged.image}`} alt="" />
            </div>
            <a className="navbar-brand" href="./">Welcome to <br /> {userLogged.name}</a>
            <hr style={{ backgroundColor: '#ffffff' }} />
            
            <a href="./Service" className="dashboard-nav-link">
                Services
            </a>
            <a href="./City" className="dashboard-nav-link">
               City
            </a>
            <a href="./price_plan" className="dashboard-nav-link">
               Price Plan
            </a>
            <a href="./service_apply" className="dashboard-nav-link">
            Service_Apply
            </a>
            
        </div>
        </div>
    );
}

export default Sidebar;