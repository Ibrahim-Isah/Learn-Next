import { getSession } from 'next-auth/client';

const handler = async (req, res) => {
	const session = await getSession({ req });

	if (!session) {
		res.status(401).json({ report: 'Unauthorised user' });
	} else {
		res.status(200).json({ message: 'Welcome to out page' }, session);
	}
};
