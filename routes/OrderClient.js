"use strict";

const AppConfig_1 = require("../config/AppConfig");
const orderDomain = require("./orderDomain");
const request = require("request-promise");
class OrderClient {
    constructor() {
        this.config = new AppConfig_1.default();
    }
    getOrders(manuf) {
        // return request.get(this.config.getOrderQueryMSURL() + '/byManuf/' + manuf, { json: true })
        //     .then(body => {
        //     return body;
        // })
        //     .catch(err => {
        //     console.error(err);
        //     return new Promise((resolve, _) => {
        //         // resolve empty on error
        //         resolve([]);
        //     });
        // });

        return new Promise((resolve, _) => {
            var myOrder = new orderDomain.Order()

           

            myOrder.customerID = 1234;
            myOrder.orderID = 'STRIKER-2312newprdewxdvd';
            myOrder.productID = 123123;
            myOrder.quantity = 123123;
            myOrder.pickupDate = 123123;
            myOrder.expectedDeliveryDate = 123123;
            myOrder.status = 'y';
            myOrder.pickupAddress = {
                street: 'avdsvds',
                city: 'pleasanton',
                country: 'usa',
                state: 'ca',
                zipcode: '94332423'
            }
            myOrder.destinationAddress = {
                street: 'avdsvds',
                city: 'pleasanton',
                country: 'usa',
                state: 'ca',
                zipcode: '94332423'
            }


            console.log(myOrder);
            resolve([myOrder]);
        });
    }
    getOrderByID(id) {
        return request.get(this.config.getOrderQueryMSURL() + '/' + id, { json: true })
            .then((body) => {
            console.log(body);
            return body;
        })
            .catch((err) => {
            console.error(err);
            return new Promise((resolve, _) => {
                resolve(new orderDomain.Order());
            });
        });
    }
    saveOrder(order) {

        console.log("save order "+ JSON.stringify(order));
        return request.post(this.config.getOrderMSURL(), { json: true,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: order
        })
            .then(body => {
            return body;
        })
            .catch(err => {

                console.log("save order error block"+ JSON.stringify(order));
            console.error(err);
           order.status = "Error ";
            return new Promise((resolve, _) => {
                resolve(order);
            });
        });
    }
    updateOrder(order) {
        return request.put(`${this.config.getOrderMSURL()}/${order.orderID}`, { json: true,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: order
        })
            .then(body => {
            return body;
        })
            .catch(err => {
            console.error(err);
            order.status = "Error " + err;
            return new Promise((resolve, _) => {
                resolve(order);
            });
        });
    }
    checkCreateNewOrder(order) {
        return (order.customerID !== "" && order.customerID !== undefined &&
            order.pickupAddress.city !== "" && order.pickupAddress.city !== undefined &&
            order.pickupAddress.country !== "" && order.pickupAddress.country !== undefined &&
            order.pickupAddress.state !== "" && order.pickupAddress.state !== undefined &&
            order.pickupAddress.street !== "" && order.pickupAddress.street !== undefined &&
            order.pickupAddress.zipcode !== "" && order.pickupAddress.zipcode !== undefined &&
            order.destinationAddress.city !== "" && order.destinationAddress.city !== undefined &&
            order.destinationAddress.country !== "" && order.destinationAddress.country !== undefined &&
            order.destinationAddress.state !== "" && order.destinationAddress.state !== undefined &&
            order.destinationAddress.street !== "" && order.destinationAddress.street !== undefined &&
            order.destinationAddress.zipcode !== "" && order.destinationAddress.zipcode !== undefined &&
            order.productID !== "" && order.productID !== undefined &&
            order.quantity !== "" && order.quantity !== "0" && order.quantity !== undefined &&
            order.expectedDeliveryDate !== "" && order.expectedDeliveryDate !== "");
    }
}
exports.default = OrderClient;
//# sourceMappingURL=OrderClient.js.map