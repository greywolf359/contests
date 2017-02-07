const express = require('express');
const data = require('../src/sourceData');

router = express.Router();

router.get('/contests', (req,res)=>{
	console.log('api call--->', data.contests);
	res.send({contests: data.contests});
})

module.exports = router;