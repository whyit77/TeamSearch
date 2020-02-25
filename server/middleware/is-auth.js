const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
	const authHeader = req.get('Authorization');
	if (!authHeader) {
		req.isAuth = false;
		return next();
	}
	const token = authHeader.split(' ')[1];
	if (!token || token === '') {
		req.isAuth = false;
		return next();
	}
	let decodedToken;
	try {
		decodedToken = jwt.verify(
			token,
			'F320DF1F1D727FF73D773C79FBA43251ED40BDA3C329FF75D64B34C88034F386'
		);
	} catch (err) {
		req.isAuth = false;
		return next();
	}
	if (!decodedToken) {
		req.isAuth = false;
		return next();
	}
	req.isAuth = true;
	req.userId = decodedToken.userId;
	next();
};
