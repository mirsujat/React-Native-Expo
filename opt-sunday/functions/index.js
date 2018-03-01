const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestOtpSunday = require('./request_otp_sunday');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://otp-sunday.firebaseio.com'
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOtpSunday = functions.https.onRequest(requestOtpSunday);
