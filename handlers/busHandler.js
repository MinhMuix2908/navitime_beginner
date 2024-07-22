const { navitimeConfig } = require('../config/allConfig');
const { PublicTransportType, PublicTransportUnuse, PublicTransportOrder } = require('../data/allEnum')
const { getRequest } = require('./common')

async function getBusRoute(start = "", goal = "") {
    var rawQuery = {
        start_time: new Date().toISOString().substring(0, 16),
        unuse: PublicTransportUnuse.bus,
        start: start,
        goal: goal,
        order: PublicTransportOrder.bus,
        limit: 10,
        bus_data: "timetable",
        signature: navitimeConfig.signature,
        request_code: navitimeConfig.requestCode,
    };
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

async function findBusStation(word = "") {
    var rawQuery = {
        word: word,
        limit: 20,
        type: PublicTransportType.bus,
        signature: navitimeConfig.signature,
        request_code: navitimeConfig.requestCode,
    };
    var queryString = new URLSearchParams(rawQuery).toString();
    var urlStation = `https://${navitimeConfig.domain}/${navitimeConfig.cid}/v1/transport_node?${queryString}`;

    try {
        var addressList = await getRequest(urlStation);
        return addressList;
    } catch (error) {
        console.error(`Error fetching spots: ${error.message}`);
        throw error;
    }
}

module.exports = {
    findBusStation,
    getBusRoute,
};