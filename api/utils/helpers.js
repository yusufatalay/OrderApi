import jwt from 'jsonwebtoken';
import db from '../src/models';
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

	static authorizeUser(permission_id) {
		return async (req, res, next) => {
			/*
			 * get user's permissions
			 * check if user's permission's includes given permission in the parameter
			 * response accordingly (401 for unauthorized)
			 */

			/*
			 * to reach user permission the table path looks like this
			 * userid -> userrole -> role -> rolepermission -> permission
			 */
			try {

				const result = await db.Users.findOne({
					where: {
						id: req.userid
					},
					include: {
						model: db.Roles,
						include: {
							model: db.Permissions,
							where: {
								id: permission_id
							},
							through: {
								attributes: []
							}
						},
						through: {
							attributes: []
						}
					}
				});
				const perm = JSON.parse(JSON.stringify(result));
				if (perm.Roles.length === 0) {
					res.status(401).json({ message: 'unauthorized', type: false });
				}
				else {
					next();
				}

			}
			catch (error) {
				throw error;
			}

		};
	}

}

export default Helpers;