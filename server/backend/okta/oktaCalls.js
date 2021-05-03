const tools = require('../tools);
const http = require('http');
const fetch = require('node-fetch');
const btoa = require('btoa');
const atob = require('atob');

const oktaLogin = (config, req, res) => {
  console.log("hello from oktaLogin");
  // req.session.oktaPg = req.query.page ? req.query.page : req.query.pg;
  req.session.okta = {};
  let url = `${config.oktaDomain}/authorize?client_id=${config.clientId}&response_type=${encodeURIComponent(config.scope)}&redirect_uri=${encodeURIComponent(config.redirect)}&state=${tools.bin2hex(tools.genRandoStr(5))}`;
  res.writeHead(301,
    { Location: url }
  );
  res.end();
}

const getAccess = (config, req, nodeRes) => {
  console.log("hello from getaccess");
  fetch(`${config.oktaDomain}/token?grant_type=authorization_code&redirect_uri=${config.redirect}&code=${req.query.code}&scope=${encodeURIComponent(config.scope)}`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${btoa(`${config.clientId}:${config.clientSecret}`)}`,
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
  })
    .then(res => res.json())
    .then(
      result => {
        if (result.error) {
          oktaLogin(config, req, nodeRes);
          return false;
        } else {
          req.session.okta.accessToken = result.access_token;
          req.session.okta.refreshToken = result.refresh_token;
          let userProfile = decodeJwt(result.id_token);
          req.session.okta.profile = userProfile;
          console.log('access granted');
        }
      },
      error => {
        console.error(error);
      }
    );
}

const refreshAccess = (config, req, nodeRes) => {
  console.log("hello from refreshAccess");
  fetch(`${config.oktaDomain}/token?grant_type=refresh_token&redirect_uri=${config.redirect}&refresh_token=${req.session.okta.refreshToken}`, {
    method: "POST",
    headers: {
      "Authorization": `Basic ${btoa(`${config.clientId}:${config.clientSecret}`)}`,
      "Accept": "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    },
  })
    .then(res => res.json())
    .then(
      result => {
        if (result.error) {
          oktaLogin(config, req, nodeRes);
          return false;
        } else {
          req.session.okta.accessToken = result.access_token;
          req.session.okta.refreshToken = result.refresh_token;
          let userProfile = decodeJwt(result.id_token);
          req.session.okta.profile = userProfile;
          console.log('access granted');
        }
      },
      error => {
        console.error(error);
      }
    );
}

const decodeJwt = jwt => {
  let body = jwt.split('.')[1];
  return JSON.parse(atob(body));
}

module.exports = {
  oktaLogin,
  getAccess,
  refreshAccess
}
