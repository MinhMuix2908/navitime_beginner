
const { navitimeConfig } = require('../config/allConfig');
const { ShapeCarConditions } = require('../data/allEnum')
const { getRequest } = require('./common')

async function drawCarMap(start = "", goal = "", transits = []) {

    var rawQuery = {
        start_time: new Date().toISOString().substring(0, 16),
        condition: ShapeCarConditions.recommend,
        start: start,
        goal: goal,
        signature: navitimeConfig.signature,
        request_code: navitimeConfig.requestCode,
    }
    if (transits?.length) {
        rawQuery.via = JSON.stringify(
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
    var queryString = new URLSearchParams(rawQuery).toString();

    var url = `https://${navitimeConfig.domain}/${navitimeConfig.cid}/v1/shape_car?${queryString}`;

    try {
        var spotList = await getRequest(url);
        return spotList;
    } catch (error) {
        console.error(`Error fetching spots: ${error.message}`);
        throw error;
    }
}

async function detailCarMap(start = "", goal = "", transits = []) {

    var rawQuery = {
        start_time: new Date().toISOString().substring(0, 16),
        condition: ShapeCarConditions.recommend,
        start: start,
        goal: goal,
        signature: navitimeConfig.signature,
        request_code: navitimeConfig.requestCode,
    }
    if (transits?.length) {
        rawQuery.via = JSON.stringify(
            transits.reduce((acc, curr, index, array) => {
                if (index % 2 === 0) {
                    acc.push({
                        lat: curr,
                        lon: array[index + 1] || ''
                    });
                }
                return acc;
            }, [])
        );
    }
    var queryString = new URLSearchParams(rawQuery).toString();

    var url = `https://${navitimeConfig.domain}/${navitimeConfig.cid}/v1/route_car?${queryString}`;

    try {
        var spotList = await getRequest(url);
        return spotList;
    } catch (error) {
        console.error(`Error fetching spots: ${error.message}`);
        throw error;
    }
}

async function findSpotAndAddress(word = "") {
    var rawQuery = {
        word: word,
        limit: 10,
        signature: navitimeConfig.signature,
        request_code: navitimeConfig.requestCode,
    }
    var queryString = new URLSearchParams(rawQuery).toString();

    var urlSpot = `https://${navitimeConfig.domain}/${navitimeConfig.cid}/v1/spot?${queryString}`;
    var urlAddress = `https://${navitimeConfig.domain}/${navitimeConfig.cid}/v1/address?${queryString}`;

    try {
        var spotList = await getRequest(urlSpot);
        var addressList = await getRequest(urlAddress);
        return [...spotList.items, ...addressList.items];
    } catch (error) {
        console.error(`Error fetching spots: ${error.message}`);
        throw error;
    }
}


module.exports = {
    findSpotAndAddress,
    drawCarMap,
    detailCarMap,
};
