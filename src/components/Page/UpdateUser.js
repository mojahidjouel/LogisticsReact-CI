import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateUser() {
      const navigate = useNavigate();
      const [inputs, setInputs] = useState([]);
      const {id} = useParams();
      useEffect(() => {
          getUser();
      }, []);
      function getUser() {
          axios.get(`http://localhost/react_admin/services/single_user.php?id=${id}`).then(function(response) {
              console.log(response.data);
              setInputs(response.data);
          });
      }
      const handleChange = (event) => {
          const name = event.target.name;
          const value = event.target.value;
          setInputs(values => ({...values, [name]: value}));
      }
      const handleSubmit = (event) => {
          event.preventDefault();
          axios.put(`http://localhost/react_admin/services/update_user.php?id=${id}`, inputs).then(function(response){
              console.log(response.data);
              navigate('/');
          });
  
      }
      return (
          <div>
              <h1>Edit user</h1>

              {/* <form onSubmit={handleSubmit}>
                  <table cellSpacing="10">
                      <tbody>

                          <tr>
                              <th>
                                  <label>Name: </label>
                              </th>
                              <td>
                                  <input value={inputs.name} type="text" name="name" onChange={handleChange} />
                              </td>
                          </tr>
                          <tr>
                              <th>
                                  <label>Email: </label>
                              </th>
                              <td> 
                                  <input value={inputs.email} type="text" name="email" onChange={handleChange} />
                              </td>
                          </tr>
                          <tr>
                              <th>
                                  <label>Subject: </label>
                              </th>
                              <td>
                                  <input value={inputs.subject} type="text" name="subject" onChange={handleChange} />
                              </td>
                          </tr>
                          <tr>
                              <th>
                                  <label>Message: </label>
                              </th>
                              <td>
                                  <input value={inputs.message} type="text" name="message" onChange={handleChange} />
                              </td>
                          </tr>

                          <tr>
                              <td colSpan="2" align ="right">
                                  <button>Save</button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </form> */}
              
              <form onSubmit={handleSubmit}>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="text" name="name" onChange={handleChange} className="form-control" id="name" placeholder="Your Name"/>
                                        <label htmlFor="name">Your Name:</label>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-floating">
                                        <input type="email" name="email" onChange={handleChange} className="form-control" id="email" placeholder="Your Email"/>
                                        <label htmlFor="email">Your Email:</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <input type="text" name="subject" onChange={handleChange} className="form-control" id="subject" placeholder="Subject"/>
                                        <label htmlFor="subject">Subject</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="form-floating">
                                        <textarea className="form-control" onChange={handleChange} name="message" placeholder="Leave a message here" id="message" style={{height: "100px"}}></textarea>
                                        <label htmlFor="message">Message</label>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-primary w-100 py-3" >Send Message</button>
                                </div>
                            </div>
                        </form>

          </div>
      )
  }