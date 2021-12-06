import { useState, useEffect } from 'react';

export default function Dashboard() {
	const [loading, setLoading] = useState(true);
	const [dashboardDetails, setDashboardDetails] = useState(null);

	useEffect(() => {
		async function fetchDashboard() {
			const response = await fetch('http://localhost:4000/dashboard');
			const data = await response.json();
			setDashboardDetails(data);
			setLoading(false);
		}
		fetchDashboard();
	}, []);

	if (loading) return <h1>Loading...</h1>;
	return (
		<>
			<h1>User Dashboard</h1>
			<h2>Posts - {dashboardDetails.posts}</h2>
			<h2>Likes - {dashboardDetails.likes}</h2>
			<h2>Followers - {dashboardDetails.followers}</h2>
			<h2>Following - {dashboardDetails.following}</h2>
		</>
	);
}
