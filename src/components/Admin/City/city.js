import { useEffect, useState } from "react";
import { CityList, CityCreate, CityDelete } from "../../../api/CityList";
import Sidebar from "../Layout/sidebar";
import Footer from "../Layout/footer";

export default function City() {
    const [Listdata, setListdata] = useState([]);
    const [inputs, setInputs] = useState([]);
    const fetchData = async () => {
        const data = await CityList();
        setListdata(data);
    };
    
    useEffect(() => {
        fetchData();
    }, []);

    const deleteData = async (id) => {
        try {
            const data = CityDelete(id);
            fetchData();
        } catch (error) {
            console.error(error.message);
        }
    }

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    
    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const data = await CityCreate(inputs);
            fetchData();
            if(data==1)
                document.getElementById('modelbutton').click();
        } catch (error) {
            console.error(error.message);
        }
    };
    
    const clearData = ()=>{
        setInputs(values => ({...values,"id":"","name": "", "code": ""}))
    } 


    /* for update */

    function getSingleData(d) {
       document.getElementById('modelbutton').click();
       setInputs(d);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                <Sidebar/>
                    <div className="col-9">
                        <h1 className="text-center"><small>City List</small></h1>

                              <button onClick={clearData} id="modelbutton" type="button" className="btn btn-success btn-sm float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                                    Add City
                                </button>
                  
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Name</th>                                
                                    <th>Code</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>

                            <tbody>
                                    {Listdata && Listdata.map((d, key) =>
                                        <tr key={key}>
                                            <td>{d.id}</td>
                                            <td>{d.name}</td>       
                                            <td>{d.code}</td>
                                            <td>
                                                <a href="javascript:void(0)" className="btn btn-success me-2" onClick={() => getSingleData(d)} >Edit</a>
                                                <a href="javascript:void(0)" className="btn btn-danger btn-xs" onClick={() => deleteData(d.id)}>Delete</a>
                                            </td>
                                        </tr>
                                    )}

                            </tbody>

                        </table>
        
                        <div className="modal" id="myModal">
                            <div className="modal-dialog modal-lg">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h4 className="modal-title">Information</h4>
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
                                                        <label className="form-label">Code</label>
                                                            <input type="text" className="form-control" name="code" value={inputs.code} onChange={handleChange} />
                                                    </div>
                                                </div>
                                            </div>


                                            <div className="row">
                                                <div className="col-sm-3 offset-sm-3">
                                                    <button type="submit" className="btn btn-info" data-bs-dismiss>Submit</button>
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
                </div>
            </div>
            
        
        <Footer />
        
        </div>
    )
}