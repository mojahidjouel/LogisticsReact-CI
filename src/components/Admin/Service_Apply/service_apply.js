import axios from "axios"
import { useEffect, useState } from "react";

import Sidebar from "../Layout/sidebar";
import Footer from "../Layout/footer";

export default function Service_Apply() {
    const [Listdata, setListdata] = useState([]);
    const [City, setCity] = useState([]);
    const [inputs, setInputs] = useState([]);

    useEffect(() => {
        getDatas();
        getCity();
    }, []);
    function getDatas() {
        axios.get(`${global.config.apiUrl}service_apply`).then(function(response) {
            setListdata(response.data.data);
        });
    }
    function getCity() {
        axios.get(`${global.config.apiUrl}city`).then(function(response) {
            setCity(response.data.data);
        });
    }

    const deleteUser = (id) => {
        axios.delete(`${global.config.apiUrl}service_apply/delete/${id}`).then(function(response){
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
        axios.post(`${global.config.apiUrl}service_apply/create`, inputs).then(function(response){
            console.log(response.data)
            getDatas();
            if(response.data.status==1)
                document.getElementById('modelbutton').click();
        });
    }
    
    const clearData = ()=>{
        setInputs(values => ({...values,"id":"","from_city": "","to_city": "","product_name": "","product_description": "","product_weight": "","receiver_address": "","sender_address": "","contact_name": "","contact_number": "", "base_price":"","unit_price":"","shipping_cost":""}))
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
           
                <div className="row ">
                <Sidebar/>
              
                    <div className="col-10">
    
                  <h1 className="text-center"><small>Service_Apply List</small></h1>
                            <button onClick={clearData} id="modelbutton" type="button" className="btn btn-success btn-sm float-end" data-bs-toggle="modal" data-bs-target="#myModal">
                                Add Service_Apply Plan
                            </button>
                   
                        <table className="table table-hover">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>From City</th>                                
                                    <th>To City</th>                                
                                    <th>Product Name</th>                                
                                    <th>Product Description</th>
                                    <th>Product Weight</th>
                                    <th>Receiver Address</th>
                                    <th>Sender Address</th>
                                    <th>Contact Name</th>
                                    <th>Contact Number</th>
                                    <th>Base Price</th>
                                    <th>Unit Price</th>
                                    <th>Shipping Cost</th>
                                    <th>Actions</th>
                                </tr>
                                </thead>

                            <tbody>
                                    {Listdata && Listdata.map((d, key) =>
                                        <tr key={key}>
                                            <td>{d.id}</td>
                                            <td>{d.from_city_name}</td>       
                                            <td>{d.to_city_name}</td>       
                                            <td>{d.product_name}</td>       
                                            <td>{d.product_description}</td>
                                            <td>{d.product_weight}</td>
                                            <td>{d.receiver_address}</td>
                                            <td>{d.sender_address}</td>
                                            <td>{d.contact_name}</td>
                                            <td>{d.contact_number}</td>
                                            <td>{d.base_price}</td>
                                            <td>{d.unit_price}</td>
                                            <td>{d.shipping_cost}</td>
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
                                    <h4 className="modal-title">Service_Apply Data</h4>
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

                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Product Name</label>
                                        <input type="text" className="form-control" name="product_name" value={inputs.product_name} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Product Description</label>
                                        <input type="text" className="form-control" name="product_description" value={inputs.product_description} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Product Weight</label>
                                        <input type="text" className="form-control" name="product_weight" value={inputs.product_weight} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Receiver Address</label>
                                        <input type="text" className="form-control" name="receiver_address" value={inputs.receiver_address} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Sender Address</label>
                                        <input type="text" className="form-control" name="sender_address" value={inputs.sender_address} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Contact Name</label>
                                        <input type="text" className="form-control" name="contact_name" value={inputs.contact_name} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Contact Number</label>
                                        <input type="text" className="form-control" name="contact_number" value={inputs.contact_number} onChange={handleChange} />
                                    </div>
                                </div>                                
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Base Price</label>
                                        <input type="text" className="form-control" name="base_price" value={inputs.base_price} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Unit Price</label>
                                        <input type="text" className="form-control" name="unit_price" value={inputs.unit_price} onChange={handleChange} />
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="mb-3">
                                        <label className="form-label">Shipping Cost</label>
                                        <input type="text" className="form-control" name="shipping_cost" value={inputs.shipping_cost} onChange={handleChange} />
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