var Promise = require('promise');
var readFile = Promise.denodeify(require('fs').readFile);
const path = require('path');

module.exports = {
    buyAnIphone: (iphoneName) => {
        return new Promise((fulfill, reject) => {
            var isHappy = false;
            if (isHappy) {
                const phone = {
                    name: iphoneName,
                    color: 'black'
                };
                fulfill(phone);
            } else {
                const reason = new Error('I am not happy with this!');
                reject(reason);
            }
        });
    },
    readJsonFile: (jsonFileName) => {
        const filePath = path.join(__dirname, jsonFileName);
        return require(filePath);
    }
};