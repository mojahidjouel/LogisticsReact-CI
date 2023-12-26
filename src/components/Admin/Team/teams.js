import axios from "axios"
import { useEffect, useState } from "react";

import Sidebar from "../Layout/sidebar";
import Footer from "../Layout/footer";





export default function Team() {
    const [Team, setTeam] = useState([]);

    

     const [inputs, setInputs] = useState([]);

    useEffect(() => {
        getDatas();
    }, []);
    function getDatas() {
        axios.get('http://localhost/react_admin/crud_team/index_team.php').then(function(response) {
            setTeam(response.data.data);
        });
    }

    

    const deleteUser = (id) => {
        axios.delete(`http://localhost/react_admin/crud_team/delete_team.php?id=${id}`).then(function(response){
            getDatas();
        });
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    
    const onFileChange= (e) => {
        let files = e.target.files;
        let fileReader = new FileReader();
        fileReader.readAsDataURL(files[0]);
 
        fileReader.onload = (event) => {
            const name = "image";
            const value = event.target.result
            setInputs(values => ({...values, [name]: value}));
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost/react_admin/crud_team/create_team.php', inputs).then(function(response){
            console.log(response.data)
            getDatas();
            if(response.data.status==1)
                document.getElementById('modelbutton').click();
        });
    }
    
    const clearData = ()=>{
        
        setInputs(values => ({...values,"id":"","name": "","image": "","description":"",}))
    } 


    /* for update */

    function getSingleProduct(id) {
        document.getElementById('modelbutton').click();
        axios.get(`http://localhost/react_admin/crud_team/single_team.php?id=${id}`).then(function(response) {
            setInputs(response.data);
            setInputs(values => ({...values,"image":""}))
        });
    }

    return (
        <div>

        

    <div className="container">
                <div className="row">
                <Sidebar/>
                    <div className="col-9">
                    <h1 className="text-center"><small>Team List</small></h1>
                        
                        <button onClick={clearData} id="modelbutton" type="button" className="btn btn-primary btn-sm float-end" data-bs-toggle="modal" data-bs-target="#myModal">Add Team
                        </button>
                            
                        
                    </div>
                </div>
            
                <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>                                
                                <th>Image</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                        <tbody>
                                {Team.map((d, key) =>
                                    <tr key={key}>
                                        <td>{d.id}</td>
                                        <td>{d.name}</td>
                                        <td><img src={d.image} alt="" width={50} /></td>
                                        <td>{d.description}</td>
                                        
                                        <td>
                                            <a href="javascript:void(0)" className="btn btn-success me-2" onClick={() => getSingleProduct(d.id)} >Edit</a>
                                            <a href="javascript:void(0)" className="btn btn-danger btn-xs" onClick={() => deleteUser(d.id)}>Delete</a>
                                        </td>
                                    </tr>
                                )}

                        </tbody>

                </table>
    
            <div className="modal" id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Team Data</h4>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                        </div>

                                
            <div className="modal-body">
                <form onSubmit={handleSubmit}>
                    <div className="row">

                        <div className="col-sm-6">
                            <div className="mb-3">
                                <label className="form-label">Name</label>
                                    <input value={inputs.name} type="text" className="form-control" name="name" onChange={handleChange} />
                                        <input value={inputs.id} type="hidden" name="id"/>
                            </div>
                        </div>

                    <div className="col-sm-4">                          
                        <div className="mb-3">
                            <label className="form-label">Image</label>
                                <input type="file" className="form-control" name="image" onChange={onFileChange} />
                        </div>
                    </div>
                        
                        <div className="col-sm-12">
                            <div className="mb-3">
                                <label className="form-label">Description</label>
                                    <textarea className="form-control" name="description" onChange={handleChange} value={inputs.description} ></textarea>
                            </div>
                        </div>
                                               
                    </div>


                    <div className="row">
                    <div className="col-sm-3 offset-sm-3">
                        <button type="submit" className="btn btn-primary" data-bs-dismiss>Submit</button>
                    </div>
                    <div className="col-sm-3">
                    <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                                            

                    </form>
                </div>
                </div>
                </div>
            </div>
            
            
            
    </div>
            
        
    <Footer />
        
    </div>

    )
}