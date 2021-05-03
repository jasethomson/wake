const OktaJwtVerifier = require("@okta/jwt-verifier");
const { refreshAccess } = require("./oktaCalls");

const validateJwt = (config, req, res, deployPage) => {
  console.log("hello from validate jwt");
  const oktaJwtVerifier = new OktaJwtVerifier({
    issuer: `https://${config.oktaDomainRoot}/oauth2/default`,
    client_id: config.clientId
  });

  oktaJwtVerifier.verifyAccessToken(req.session.okta.accessToken, 'api://default')
    .then(jwt => {
      console.log("successful validation", jwt);
    })
    .catch(err => {
      console.error(err);
      console.log("error validation");
      refreshAccess(config, req, res);
    })
}

module.exports = validateJwt;
