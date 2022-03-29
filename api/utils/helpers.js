import jwt from 'jsonwebtoken';
class Helpers {

	static getFileRoute(filename) {

		const string = filename.split('.')[0].split('Route')[0].toLowerCase();
		return string;
	}

	static generateJWT(user) {
		return jwt.sign({ user: user.id }, process.env.TOKEN_SECRET, { expiresIn: '86400s' });

	}
	static authenticateToken(req, res, next) {
		const authHeader = req.headers['authorization'];
		//const token = authHeader && authHeader.split(' ')[1];

		if (authHeader === null) return res.sendStatus(401);

		jwt.verify(authHeader, process.env.TOKEN_SECRET, (err, data) => {
			req.userid = data.user;
			if (err) return res.sendStatus(403);

			next();
		});
	}

}

export default Helpers;