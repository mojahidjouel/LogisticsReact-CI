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
          axios.get(`http://localhost/react/single_user.php?id=${id}`).then(function(response) {
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
          axios.put(`http://localhost/react/update_user.php?id=${id}`, inputs).then(function(response){
              console.log(response.data);
              navigate('/');
          });
  
      }
      return (
          <div>
              <h1>Edit user</h1>
              <form onSubmit={handleSubmit}>
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
              </form>
          </div>
      )
  }