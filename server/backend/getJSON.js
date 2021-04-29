const https = require('https');

module.exports = getJSON = (options, nodeRes) => {
  let output = '';
  const req = https.request(options, (res) => {
    console.log(`${options.host} : ${res.statusCode}`);
    res.setEncoding('utf8');

    res.on('data', (data) => {
      output += data;
    });

    res.on('end', () => {
      let obj = JSON.parse(output);
      nodeRes.status(res.statusCode).send(obj);
    });
  });

  req.on('error', (err) => {
    nodeRes.status(res.statusCode).send(obj);
  });

  req.end();
};
