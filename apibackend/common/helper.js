const _ = require('lodash');
const db = require('../models');
const GcmDevice = db.GcmDevice;
const ApnsDevice = db.ApnsDevice;
const WebDevice = db.WebDevice;
const { firebaseAdmin } = require('../config/firebase-config');


exports.sendDirectNotification = async ({ userFrom, userToId, title, body }) => {

    const webIds = await WebDevice.findAll({
        attributes: ['registId'],
        raw: true,
        where: {
            userId: userToId
        }
    }).then(devices => {
        return _.map(devices, function (device) {
            return device.registId
        });
    });

    const apnsIds = await ApnsDevice.findAll({
        attributes: ['registId'],
        raw: true,
        where: {
            userId: userToId
        }
    }).then(devices => {
        return _.map(devices, function (device) {
            return device.registId
        });
    });

    const gcmIds = await GcmDevice.findAll({
        attributes: ['registId'],
        raw: true,
        where: {
            userId: userToId
        }
    }).then(devices => {
        return _.map(devices, function (device) {
            return device.registId
        });
    });

    let regIds = webIds.concat(apnsIds, gcmIds);
    regIds = regIds.filter(function (el) {
        return el !== '';
    });

    const payload = {
        notification: {
            title,
            body,
            sound: 'default'
        }
    };

    const notification_options = {
        priority: "high",
        timeToLive: 60 * 60 * 24,
    };

    try {
        firebaseAdmin.messaging().sendToDevice(
            regIds,
            payload,
            notification_options,
        ).then(response => {
            console.log("Successfully sent with response: ", response);
            return true;
        }).catch(error => {
            console.log(error);
            console.log("error:", error);
        });
    } catch (e) {
        console.log("error:", e);
    }
    return false;
};
