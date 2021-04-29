const https = require('https');
const express = require("express");
const app = express();

const url = `https://${process.env.OKTA_DOMAIN}/oauth2/v1/authorize?client_id=${process.env.CLIENT_ID}&response_type=code&scope=openid&redirect_uri=${encodeURIComponent(process.env.OKTA_REDIRECT)}&state=1aty7894`;

app.get('*', function (req, res) {
  res.redirect("https://google.com")
})

module.exports = url;
