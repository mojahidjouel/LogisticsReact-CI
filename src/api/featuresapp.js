const BASE_URL = 'http://localhost/react_admin/services';

export const Featuresapp = async () => {
    try {
        const response = await fetch(`${BASE_URL}/features.php`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error(`Error fetching features data: ${error.message}`);
    }
};