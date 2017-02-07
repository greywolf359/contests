//fetch data from api
const config = require('./config');
const axios = require("axios");
console.log('inrender', config.serverUrl);
const url = config.serverUrl;

axios.get(`${url}/api/contests`)
	.then(resp=>{
		console.log('serverrender', resp.data);
	},(error)=>{console.log('error', error)})