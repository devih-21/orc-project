const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

export default function handler(req, res) {
    if (req.method === 'POST') {
        app.use('/test', () => {
            res.send("test")
            createProxyMiddleware({ target: 'http://13.230.161.4:5000/ocr/upload' })
        });
    }

    if (req.method === 'GET') {
        res.send('This is a proxy service which proxies to Billing and Account APIs.');
    }
}