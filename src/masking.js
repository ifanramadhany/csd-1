var CryptoJS = require("crypto-js");

function maskingPwd(password) {

  if (password != "") {
    var salt = randomgen();
    var key = "63706d303639" + salt; // ASCII
    key = ConvertStringToHex(key); // Hex String
    key = CryptoJS.enc.Hex.parse(key); // Bytes

    var encrypted = CryptoJS.TripleDES.encrypt(password, key, {
      mode: CryptoJS.mode.ECB,
    }); // Not ASCII
    var masked = salt + encrypted;

    return masked.toString();
  }
}

function encrypt(plainText) {
  var salt = randomgen();
  var key = "CPMCryptoM2_" + salt; // ASCII
  key = ConvertStringToHex(key); // Hex String
  key = CryptoJS.enc.Hex.parse(key); // Bytes

  var encrypted = CryptoJS.TripleDES.encrypt(plainText, key, {
    mode: CryptoJS.mode.ECB,
  }); // Not ASCII
  return salt + encrypted;
}

function decryptFromSrv(encryptedSrv) {
  var key = "CPMCryptoM2_" + encryptedSrv.substring(0, 12); // ASCII
  key = ConvertStringToHex(key); // Hex String
  key = CryptoJS.enc.Hex.parse(key); // Bytes

  var encrypted = encryptedSrv.substring(12, encryptedSrv.length);

  var decrypted = CryptoJS.TripleDES.decrypt(encrypted, key, {
    mode: CryptoJS.mode.ECB,
  });
  return hexToString(decrypted);
}

function ConvertStringToHex(str) {
  var arr = [];
  for (var i = 0; i < str.length; i++) {
    arr[i] = str.charCodeAt(i).toString(16).slice(-4);
  }
  var print = "";
  for (var i = 0; i < str.length; i++) {
    print += arr[i];
  }

  return print;
}

function hexToString(hexStr) {
  var hex = hexStr.toString();
  var str = "";
  for (var n = 0; n < hex.length; n += 2) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
}

function randomgen() {
  var size = 12;
  var result = [];
  var hexRef = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];
  for (var n = 0; n < size; n++) {
    result.push(hexRef[Math.floor(Math.random() * 16)]);
  }
  return result.join("");
}

module.exports = {
  maskingPwd,
};
