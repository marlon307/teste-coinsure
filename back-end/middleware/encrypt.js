require('dotenv').config();
const crypto = require('crypto');
const secret = process.env.SECRET_KEY;
const algorithm = 'aes-256-cbc';
const iv = crypto.randomBytes(16);


function encrypt(text) {
  const cipher = crypto.createCipheriv(algorithm, Buffer.from(secret), iv);
  let encrypted = cipher.update(text);
  encrypted = Buffer.concat([encrypted, cipher.final()]);
  return `${iv.toString('hex')}:${encrypted.toString('hex')}`;
}

function decrypt(text) {
  const separator = text.split(':');
  const iv = Buffer.from(separator[0], 'hex');
  const encryptedText = Buffer.from(separator[1], 'hex');
  const decipher = crypto.createDecipheriv(algorithm, Buffer.from(secret), iv);
  let decrypted = decipher.update(encryptedText);
  decrypted = Buffer.concat([decrypted, decipher.final()]);
  return decrypted.toString();
}

module.exports = {
  encrypt,
  decrypt,
};
