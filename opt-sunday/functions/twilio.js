const twilio = require('twilio');

//accountSid and authToken should be kept in secrete
//Here i used a trial account so it is here for convenience
const accountSid = 'AC6b26979b7e047111d11e763b1a9bbb77';
const authToken = 'a248460f1aff9737b493f09d9ff220b6';

module.exports = new twilio.Twilio(accountSid, authToken);
