const BASE_URL = 'http://localhost/react_admin';

export const Expertapp = async () => {
    try {
        const response = await fetch(`${BASE_URL}/services/expert.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        throw new Error(`Error fetching expert data: ${error.message}`);
    }
};

