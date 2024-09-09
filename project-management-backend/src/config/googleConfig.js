const { google } = require('googleapis')
const { fromEnv } = require('../utils')

exports.oauth2client = new google.auth.OAuth2(
    fromEnv('GOOGLE_CLIENT_ID'),
    fromEnv('GOOGLE_CLIENT_SECRET'),
    fromEnv('GOOGLE_REDIRECT_URI')
)