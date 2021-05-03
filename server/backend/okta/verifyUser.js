const { getAccess, oktaLogin } = require('./oktaCalls');
const validateJwt = require('./validateJwt');

const verifyUser = (config, req, res, depolyPage) => {
  console.log("Hello from VerifyUser");
  if (req.session.okta && req.session.okta.accessToken) {
    console.log("validatejwt");
    validateJwt(config, req, res, depolyPage);
  } else if (req.query.code) {
    console.log("code");
    req.session.okta = { state: req.query.state };
    getAccess(config, req, res, depolyPage);
  } else {
    console.log("oktalogin");
    oktaLogin(config, req, res);
  }
}

module.exports = verifyUser;
