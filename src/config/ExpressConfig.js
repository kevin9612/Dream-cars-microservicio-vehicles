const express = require('express');
const app = express();
const bodyParser = require('body-parser');

exports.getPort = function() {
        return (process.env.POST || 3000);
    },

    exports.getApp = function() {
        return express();
    },

    exports.getUrlEncode = function() {
        return express.urlencoded({ extended: false });
    }

exports.getBodyParserJson = function() {
    return bodyParser.json();
}

exports.getBodyParserEncoder = function() {
    return bodyParser.urlencoded({ extended: false });
}