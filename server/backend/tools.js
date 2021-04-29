const bin2hex = function bin2hex(s) {
  let i
  let l
  let o = ''
  let n
  s += ''
  for (i = 0, l = s.length; i < l; i++) {
    n = s.charCodeAt(i)
      .toString(16)
    o += n.length < 2 ? '0' + n : n;
  }
  return o;
}

const genRandoStr = function genRandoStr(len) {
  let res = [], chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charsLen = chars.length;
  for (let count = 0; count < len; count++) {
    res.push(chars.charAt(Math.floor(Math.random() * charsLen)));
  }
  return res.join('');
}

module.exports = {
  bin2hex,
  genRandoStr
}
