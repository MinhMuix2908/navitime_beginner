
const { rabidapiConfig } = require('../config/allConfig');
const { ShapeCarConditions } = require('../data/allEnum')
const axios = require('axios');

async function drawCarMap(start = "", goal = "", transits = []) {

    const options = {
        method: 'GET',
        url: 'https://' + rabidapiConfig.car_domain + '/shape_car',
        params: {
            start_time: new Date().toISOString().substring(0, 16),
            condition: ShapeCarConditions.recommend,
            goal: goal,
            start: start,
            coord_unit: 'degree',
            format: 'geojson',
            datum: 'wgs84'
        },
        headers: {
            'x-rapidapi-key': rabidapiConfig.car_key,
            'x-rapidapi-host': rabidapiConfig.car_domain,
        }
    };


    if (transits?.length) {
        options.params.via = JSON.stringify(
            transits.reduce((acc, curr, index, array) => {
                if (index % 2 === 0) {
                    acc.push({
                        lat: curr,
                        lon: array[index + 1] || '' // Handle odd number of elements
                    });
                }
                return acc;
            }, [])
        );
    }

    try {
        var spotList = await axios.request(options);
        return spotList.data;
    } catch (error) {
        console.error(`Error fetching spots: ${error.message}`);
        throw error;
    }
}

async function detailCarMap(start = "", goal = "", transits = []) {

    const options = {
        method: 'GET',
        url: 'https://' + rabidapiConfig.car_domain + '/route_car',
        params: {
            start_time: new Date().toISOString().substring(0, 16),
            condition: ShapeCarConditions.recommend,
            goal: goal,
            start: start,
            coord_unit: 'degree',
            format: 'geojson',
            datum: 'wgs84'
        },
        headers: {
            'x-rapidapi-key': rabidapiConfig.car_key,
            'x-rapidapi-host': rabidapiConfig.car_domain,
        }
    };


    if (transits?.length) {
        options.params.via = JSON.stringify(
            transits.reduce((acc, curr, index, array) => {
                if (index % 2 === 0) {
                    acc.push({
                        lat: curr,
                        lon: array[index + 1] || '' // Handle odd number of elements
                    });
                }
                return acc;
            }, [])
        );
    }

    try {
        var spotList = await axios.request(options);
        return spotList.data;
    } catch (error) {
        console.error(`Error fetching spots: ${error.message}`);
        throw error;
    }
}

async function findSpotAndAddress(word = "") {

    const options = {
        method: 'GET',
        url: 'https://'+ rabidapiConfig.geo_domain +'/address',
        params: {
            coord_unit: 'degree',
            datum: 'wgs84',
            limit: '10',
            word: word,
            sort: 'code_asc',
            offset: '0'
        },
        headers: {
            'x-rapidapi-key': rabidapiConfig.geo_key,
            'x-rapidapi-host': rabidapiConfig.geo_domain
        }
    };

    try {
        var spotList = await axios.request(options);
        return spotList.data.items
    } catch (error) {
        console.error(error);
    }
}


module.exports = {
    findSpotAndAddress,
    drawCarMap,
    detailCarMap,
};
