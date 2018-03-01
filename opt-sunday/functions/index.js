const admin = require('firebase-admin');
const functions = require('firebase-functions');
const createUser = require('./create_user');
const serviceAccount = require('./service_account.json');
const requestOtp = require('./request_otp');
const verifyOtp = require('./verify_otp');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://otp-sunday.firebaseio.com'
});

exports.createUser = functions.https.onRequest(createUser);
exports.requestOtp = functions.https.onRequest(requestOtp);
exports.verifyOtp = functions.https.onRequest(verifyOtp);
