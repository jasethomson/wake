const getJSON = require('./getJSON');

const getYouTubeSong = async (req, res) => {
  let id = req.query.id;
  const options = {
    host: process.env.TUBE_API_HOST,
    path: `${process.env.TUBE_API_PATH}?part=snippet&id=${id}&key=${process.env.TUBE_API_KEY}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  };
  getJSON(options, res);
}

module.exports = getYouTubeSong;
