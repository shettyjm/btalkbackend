"use strict";
/*
* This is a simple component to set configuation from environment
 variables or config file
*/

const config = require('./config.json');
class AppConfig {
    constructor() { }
    getKafkaBrokers() {
        return process.env.KAFKA_BROKERS || config.kafkaBrokers;
    }
    getKafkaPassword() {
        return process.env.KAFKA_PASSWORD || config.kafkaPassword;
    }
    getKafkaUser() {
        return process.env.KAFKA_USER || config.kafkaUser;
    }
    getFleetMSURL() {
        var url = config.fleetMSURL;
        if (process.env.FLEETMS_SERVICE_HOST && process.env.FLEETMS_SERVICE_PORT) {
            url = "http://" + process.env.FLEETMS_SERVICE_HOST
                + ":" + process.env.FLEETMS_SERVICE_PORT + "/fleetms";
        }
        return url;
    }
    getOrderMSURL() {
        var url = config.orderMSURL;
        if (process.env.ORDERCOMMANDMS_SERVICE_HOST && process.env.ORDERCOMMANDMS_SERVICE_PORT) {
            url = "http://" + process.env.ORDERCOMMANDMS_SERVICE_HOST
                + ":" + process.env.ORDERCOMMANDMS_SERVICE_PORT + "/orders";
        }
        return url;
    }
    getOrderQueryMSURL() {
        var url = config.orderQueryMSURL;
        if (process.env.ORDERQUERYMS_SERVICE_HOST && process.env.ORDERQUERYMS_SERVICE_PORT) {
            url = "http://" + process.env.ORDERQUERYMS_SERVICE_HOST
                + ":" + process.env.ORDERQUERYMS_SERVICE_PORT + "/orders";
        }
        return url;
    }
    getVoyageMSURL() {
        var url = config.voyagesMSURL;
        if (process.env.VOYAGESMS_SERVICE_HOST && process.env.VOYAGESMS_SERVICE_PORT) {
            url = "http://" + process.env.VOYAGESMS_SERVICE_HOST
                + ":" + process.env.VOYAGESMS_SERVICE_PORT;
        }
        return url;
    }
    getContainerMSURL() {
        var url = config.containerMSURL;
        if (process.env.CONTAINERMS_SERVICE_HOST && process.env.CONTAINERMS_SERVICE_PORT) {
            url = "http://" + process.env.CONTAINERMS_SERVICE_HOST
                + ":" + process.env.CONTAINERMS_SERVICE_PORT + "/containers";
        }
        return url;
    }
    getKafkaConnectTimeout() {
        return config.kafkaConnectTimeout;
    }
    getKafkaGroupId() {
        return config.kafkaGroupId;
    }
    getProblemTopicName() {
        return process.env.PROBLEM_TOPIC || config.problemTopicName;
    }
    getShipTopicName() {
        return process.env.SHIP_TOPIC || config.shipTopicName;
    }
    getPort() {
        return process.env.PORT || config.port;
    }
    getVersion() {
        return config.version;
    }
    getCertsPath() {
        return process.env.KAFKA_CERT_PATH || config.certsPath;
    }
    isEventStreams() {
        return ('KAFKA_PASSWORD' in process.env && process.env.KAFKA_PASSWORD.trim() !== "");
    }
    eventStreamsSecurityEnabled() {
        return ('KAFKA_CERT_PATH' in process.env);
    }
}
exports.default = AppConfig;
//# sourceMappingURL=AppConfig.js.map