import React from 'react';
import axios from 'axios';
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../Header/header';
import Footer from '../Footer/footer';


const Page = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost/react/index.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
    }
    const deleteUser = (id) => {
        axios.delete(`http://localhost/react/delete.php?id=${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }
    return (
        <div>

        <Header />
    {/* <!-- Page Header Start --> */}
    <div className="container-fluid page-header py-5" style={{marginBottom: "6rem"}}>
        <div className="container py-5">
            <h1 className="display-3 text-white mb-3 text-center animated slideInDown">List Us</h1>
            <nav aria-label="breadcrumb animated slideInDown">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                    <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                    <li className="breadcrumb-item text-white active" aria-current="page">List</li>
                </ol>
            </nav>
        </div>
    </div>
    {/* <!-- Page Header End --> */}
        

    {/* <!-- Page Header Start --> */}

    <h1 className='text-center'>Users List</h1>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th className='text-center'>Serial</th>
                        <th className='text-center'>Name</th>
                        <th className='text-center'>Email</th>
                        <th className='text-center'>Subject</th>
                        <th className='text-center'>Message</th>
                        <th className='text-center'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, key) =>
                        <tr key={key}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.subj}</td>
                            <td>{user.mes}</td>
                            <td>
                                <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}className="btn btn-success ">Edit</Link>
                                <button className="btn btn-danger" onClick={() => deleteUser(user.id)}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        
        <Footer />

        </div>
        )
    }
    
    export default Page;