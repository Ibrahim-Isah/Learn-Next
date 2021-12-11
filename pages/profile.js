import { useState, useEffect } from 'react';
import { getSession, signIn } from 'next/client';

export default function Profile() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		async function getUserSession() {
			const session = await getSession();
			if (!session) {
				signIn();
			} else {
				setLoading(false);
			}
		}
		getUserSession();
	}, []);

	if (loading) return <h2>Loading...</h2>;
	return <h1>Profile Page</h1>;
}
