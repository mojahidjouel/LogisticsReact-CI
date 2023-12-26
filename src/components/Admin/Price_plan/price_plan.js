import axios from "axios"
import { useEffect, useState } from "react";

import Sidebar from "../Layout/sidebar";
import Footer from "../Layout/footer";

export default function Price_plan() {
    const [Listdata, setListdata] = useState([]);
    const [City, setCity] = useState([]);
    const [inputs, setInputs] = useState([]);

    useEffect(() => {
        getDatas();
        getCity();
    }, []);
    function getDatas() {
        axios.get(`${global.config.apiUrl}price`).then(function(response) {
            setListdata(response.data.data);
        });
    }
    function getCity() {
        axios.get(`${global.config.apiUrl}city`).then(function(response) {
            setCity(response.data.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`http://localhost/react_admin/crud_pricing/delete_pricing.php?id=${id}`).then(function(response){
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

    const handleSubmit = async (event) => {
        console.log(inputs)
        event.preventDefault();
        axios.post(`${global.config.apiUrl}price/create`, inputs).then(function(response){
            console.log(response.data)
            getDatas();
            if(response.data.status==1)
                document.getElementById('modelbutton').click();
        });
    }
    
    const clearData = ()=>{
        setInputs(values => ({...values,"id":"","to_city": "", "from_city" : "", "base_price":"","unit_size":"","unit_price":""}))
    } 
    // function checkdata(){
    //     setInputs(c=>{
    //         const copy={...c};
    //         delete copy['from_city_name'];
    //         delete copy['to_city_name'];
    //         return copy;
    //     }); 
         
    // }

    /* for update */

    function getSingleProduct(d) {
        document.getElementById('modelbutton').click();
        setInputs(d);
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                <Sidebar/>
                    <div className="col-9">
                        <h1 className="text-center"><small>Pricing Plan List</small></h1>
                            <button onClick={clearData} id="modelbutton" type="button" className="btn btn-success btn-sm float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                                Add Pricing Plan
                            </button>
                  
                        <table className="table table-hover">
                            <thead>
                            <tr>
                                <th>#</th>
                                <th>From City</th>                                
                                <th>To City</th>                                
                                <th>Base Price</th>
                                <th>Unit Size</th>
                                <th>Unit Price</th>
                                <th>Actions</th>
                            </tr>
                            </thead>

                        <tbody>
                                {Listdata && Listdata.map((d, key) =>
                                    <tr key={key}>
                                        <td>{d.id}</td>
                                        <td>{d.from_city_name}</td>       
                                        <td>{d.to_city_name}</td>       
                                        <td>{d.base_price}</td>       
                                        <td>{d.unit_size}</td>
                                        <td>{d.unit_price}</td>
                                        <td>
                                            <a href="javascript:void(0)" className="btn btn-success me-2" onClick={() => getSingleProduct(d)} >Edit</a>
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
                                    <h4 className="modal-title">Priceing Data</h4>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
                                </div>

                                        
                    <div className="modal-body">
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <input value={inputs.id} type="hidden" name="id"/>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">From City</label>
                                        <select className="form-control" name="from_city" onChange={handleChange}>
                                            <option value="" key="">Select City</option>
                                            {City.map((d, key) =>
                                                <option selected={d.id == inputs.from_city} value={d.id} key={key}>{d.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">To City</label>
                                        <select className="form-control" name="to_city" onChange={handleChange}>
                                            <option value="" key="">Select City</option>
                                            {City.map((d, key) =>
                                                <option selected={d.id == inputs.to_city} value={d.id} key={key}>{d.name}</option>
                                            )}
                                        </select>
                                    </div>
                                </div>

                                <div className="col-sm-4">
                                    <div className="mb-3">
                                        <label className="form-label">Base Price</label>
                                        <input type="text" className="form-control" name="base_price" value={inputs.base_price} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="mb-3">
                                        <label className="form-label">Unit Size</label>
                                        <input type="text" className="form-control" name="unit_size" value={inputs.unit_size} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="mb-3">
                                        <label className="form-label">Unit Price</label>
                                        <input type="text" className="form-control" name="unit_price" value={inputs.unit_price} onChange={handleChange} />
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
                </div>
        </div>
            
        
        <Footer />
        
        </div>
    )
}