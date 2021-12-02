export default function User({ user }) {
	return (
		<>
			<ul>
				<li>
					{user.name} - {user.email}
				</li>
			</ul>
		</>
	);
}
