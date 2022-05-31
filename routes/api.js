
const express = require('express');
const fs = require("fs");

const OrderClient_1 = require("./OrderClient");
const orderClient = new OrderClient_1.default();

/** Export the APIs for the front end */
module.exports = function (app) {
    app.on('listening', function () {
        // server ready to accept connections here
    });
    // health verb for application monitoring.
    app.get('/healthz', (req, res) => {
        res.send('UP and running');
    });
    // Orders
    app.get('/api/orders/:manuf', (req, res) => {
        console.log("In api GET orders for " + req.params.manuf);
        // var orders = { "hello" : "world"}
        // res.status(200).send(orders);
        orderClient.getOrders(req.params.manuf).then((orders) => {
            console.log("Got this " + JSON.stringify(orders));
            res.status(200).send(orders);
        });
    });
   
    app.post('/api/orders', (req, res) => {
        console.log("In api post orders for " +  JSON.stringify(req.body));
        // var orders = { "hello" : "world"}
        // res.status(200).send(orders);
        orderClient.saveOrder(req.body).then((orders) => {
            console.log("Got a new order " + JSON.stringify(orders));
            res.status(200).send(orders);
        });
    });
}; // end exports
//# sourceMappingURL=api.js.map