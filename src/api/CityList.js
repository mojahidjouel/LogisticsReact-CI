import axios from 'axios';

const CityList = async (data) => {
    try {
        const response = await fetch(`${global.config.apiUrl}city`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(`Error fetching expert data: ${error.message}`);
    }
}

const CityCreate = async (data) => {
    const ENDPOINT = `${global.config.apiUrl}city/create`;
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

const CityDelete = (id) => {
    try {
        axios.delete(`${global.config.apiUrl}city/delete/${id}`).then(function(response){
            return response.data.status;
        });
    } catch(e){
        console.log(e);
    }
}

export { CityList, CityCreate, CityDelete } 