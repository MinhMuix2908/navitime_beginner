const { navitimeConfig } = require('../config/allConfig');
const { PublicTransportType, PublicTransportOrder, PublicTransportUnuse } = require('../data/allEnum')
const { getRequest } = require('./common')

async function getMetroRoute(start = "", goal = "") {

    var rawQuery = {
        start_time: new Date().toISOString().substring(0, 16),
        unuse: PublicTransportUnuse.metro,
        start: start,
        goal: goal,
        order: PublicTransportOrder.metro,
        limit: 10,
        bus_data: "timetable",
        signature: navitimeConfig.signature,
        request_code: navitimeConfig.requestCode,
    }
    var queryString = new URLSearchParams(rawQuery).toString();

    var url = `https://${navitimeConfig.domain}/${navitimeConfig.cid}/v1/route_transit?${queryString}`;

    try {
        var routeList = await getRequest(url);
        return routeList;
    } catch (error) {
        console.error(`Error fetching spots: ${error.message}`);
        throw error;
    }
}

async function findMetroStation(word = "", type = PublicTransportType.metro) {
    var rawQuery = {
        word: word,
        limit: 20,
        type: type,
        signature: navitimeConfig.signature,
        request_code: navitimeConfig.requestCode,
    }
    var queryString = new URLSearchParams(rawQuery).toString();

    var urlStation = `https://${navitimeConfig.domain}/${navitimeConfig.cid}/v1/transport_node?${queryString}`;

    try {
        var addressList = await getRequest(urlStation);
        return addressList.items;
    } catch (error) {
        console.error(`Error fetching spots: ${error.message}`);
        throw error;
    }
}

module.exports = {
    findMetroStation,
    getMetroRoute,
};
