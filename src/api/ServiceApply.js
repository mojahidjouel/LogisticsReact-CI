import axios from 'axios';

const ServiceApply = async (data) => {
    try {
        const response = await fetch(`${global.config.apiUrl}service_apply`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(`Error fetching expert data: ${error.message}`);
    }
}

const ServiceApplyCreate = async (data) => {
    const ENDPOINT = `${global.config.apiUrl}service_apply/create`;
    try {
        let response = await axios({
            method: 'post',
            responseType: 'json',
            url: ENDPOINT,
            data: data
          });
          return response.data.status;
    } catch(e){
        console.log(e);
    }
}

const ServiceApplyDelete = (id) => {
    try {
        axios.delete(`${global.config.apiUrl}service_apply/delete/${id}`).then(function(response){
            return response.data.status;
        });
    } catch(e){
        console.log(e);
    }
}

export { ServiceApply, ServiceApplyCreate, ServiceApplyDelete } 