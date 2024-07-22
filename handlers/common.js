const axios = require('axios');

async function getRequest(url) {
    try {
        var response = await axios.get(url);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

module.exports = {
    getRequest,
};
