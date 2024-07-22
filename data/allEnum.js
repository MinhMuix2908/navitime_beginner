const ShapeCarConditions = Object.freeze({
    recommend: 'recommend',
    toll_time: 'toll_time',
    toll_distance: 'toll_distance',
    toll_gas: 'toll_gas',
    free_time: 'free_time',
    free_distance: 'free_distance',
    free_gas: 'free_gas',
    free_only: 'free_only',
});

const PublicTransportType = Object.freeze({
    bus: 'busstop.shuttle_busstop.highway_busstop',
    metro: 'station',
});

const PublicTransportUnuse = Object.freeze({
    bus: 'domestic_flight.ferry.superexpress_train.sleeper_ultraexpress.ultraexpress_train.express_train.semiexpress_train.local_train.rapid_train',
    metro: 'domestic_flight.ferry.shuttle_bus.local_bus.highway_bus',
});

const PublicTransportOrder = Object.freeze({
    bus: 'time',
    metro: 'time_optimized',
});

module.exports = {
    ShapeCarConditions,
    PublicTransportType,
    PublicTransportUnuse,
    PublicTransportOrder,
};
