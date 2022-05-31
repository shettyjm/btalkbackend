"use strict";

const AppConfig_1 = require("../config/AppConfig");
const orderDomain = require("./orderDomain");
const request = require("request-promise");

class SupplierClient {
    constructor() {
        this.config = new AppConfig_1.default();
    }
    getSuppliers(supName) {
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


            const suppliers = [];
            const number = 20;
            // while (number >= 0) {
            //     suppliers.push({
            //         supplierID: faker.datatype.uuid(),
            //         name: faker.company.companyName(),
            //         description: faker.lorem.paragraphs(2),
            //         picture: faker.image.avatar(),
            //         Location : {
            //             street: faker.address.street(),
            //             city:faker.address.city(),
            //             country: 'usa',
            //             state: faker.address.state(),
            //             zipcode: faker.address.zipcode()
            //         },
            //         country: faker.address.country(),
            //         joining_date: faker.date.future(),
            //     });
            //     number--;
            // }
            var aSupplier = {}; // = new orderDomain.Supplier()



            aSupplier.supplierID = 1234;

            aSupplier.status = 'approved';
            aSupplier.Location = {
                street: '100 avaier street',
                city: 'pleasanton',
                country: 'usa',
                state: 'ca',
                zipcode: '943588'
            }



            console.log(aSupplier);

          //  var suppliers = []
            suppliers.push(aSupplier)

            aSupplier.supplierID = 34343;

            aSupplier.status = 'approved';
            aSupplier.Location = {
                street: '200 xavaier rd',
                city: 'fremont',
                country: 'usa',
                state: 'MD',
                zipcode: '443588'
            }
            suppliers.push(aSupplier)
            resolve(suppliers);
        });
    }
    getSupplierByID(id) {
        return request.get(this.config.supplierMSURL() + '/' + id, { json: true })
            .then((body) => {
                console.log(body);
                return body;
            })
            .catch((err) => {
                console.error(err);
                return new Promise((resolve, _) => {
                    resolve(new orderDomain.Supplier());
                });
            });
    }
    saveSupplier(supplier) {

        console.log("save supplier " + JSON.stringify(supplier));
        return request.post(this.config.supplierMSURL(), {
            json: true,
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: supplier
        })
            .then(body => {
                return body;
            })
            .catch(err => {

                console.log("save order error block" + JSON.stringify(supplier));
                console.error(err);
                order.status = "Error ";
                return new Promise((resolve, _) => {
                    resolve(supplier);
                });
            });
    }

}
exports.default = SupplierClient;
//# sourceMappingURL=OrderClient.js.map