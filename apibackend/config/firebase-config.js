const firebaseAdmin = require('firebase-admin');
const serviceAccount = require('./firebase-admin.json');

firebaseAdmin.initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount),
    databaseURL: 'https://<DATABASE_NAME>.firebaseio.com'
});

module.exports.firebaseAdmin = firebaseAdmin;
