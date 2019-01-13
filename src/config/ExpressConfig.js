const express = require('express');
const app = express();

exports.getPort = function() {
        return (process.env.POST || 3000);
    },

    exports.getApp = function() {
        return express();
    },

    exports.getUrlEncode = function() {
        return express.urlencoded({ extended: false });
    }