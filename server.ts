const express = require('express.js');
const app = express();

const webpagePath = "/src/html/";
const webpages = [
    `${webpagePath}index.html`,
    `${webpagePath}portfolio.html`,
    `${webpagePath}`
];
const endpoints = [
    "",
    "portfolio"
];

// TODO Forward webpages to specific get requests.