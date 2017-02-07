const env = process.env;

const nodeEnv = env.NODE_ENV || 'development';

const logStars = function(message){
	console.info('*******');
	console.info(message);
	console.info('********');
}

module.exports = {
	port: env.PORT || 8080,
	host: env.HOST || '0.0.0.0',
	logStars: logStars,
	nodeEnv: nodeEnv,
	serverUrl: `http://${this.host}:${this.port}`

}