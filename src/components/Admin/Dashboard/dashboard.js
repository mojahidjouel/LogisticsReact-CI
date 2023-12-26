
import React from 'react';
import Sidebar from '../Layout/sidebar';
import Footer from '../Layout/footer';

function Dashboard(){
    const userLogged = JSON.parse(localStorage.getItem("userdata"));
    return(
        <div>
           
    <Sidebar />
      <h1 className="text-center text-success bg-light">Logistics and Transport Services</h1>
      <img src="assets/img/carousel-1.jpg" className="rounded float-end" height={"1025px"}></img>
      <Footer/>
      
        </div>
    );
}
export default Dashboard;


