// const BASE_URL = 'http://localhost/react_admin';

export const Servicesapp = async () => {
    try {
        const response = await fetch(`${global.config.apiUrl}service`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.data;
    } catch (error) {
        throw new Error(`Error fetching services data: ${error.message}`);
    }
};