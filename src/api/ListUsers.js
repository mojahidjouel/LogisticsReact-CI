import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
export default function ListUser() {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        getUsers();
    }, []);
    function getUsers() {
        axios.get('http://localhost/react_admin/services/index.php').then(function(response) {
            console.log(response.data);
            setUsers(response.data);
        });
        
    }
    const deleteUser = (id) => {
        axios.delete(`http://localhost/react_admin/services/delete.php?id=${id}`).then(function(response){
            console.log(response.data);
            getUsers();
        });
    }

    return (
        <div>
            <h1>List Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Subject</th>
                        <th>Message</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((users, key) =>
                        <tr key={key}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.email}</td>
                            <td>{users.subj}</td>
                            <td>{users.mes}</td>
                            <td>
                                <Link to={`user/${users.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
                                <button onClick={() => deleteUser(users.id)}>Delete</button>
                            </td>
                        </tr>
                    )}

                </tbody>
            </table>
        </div>
    )
}