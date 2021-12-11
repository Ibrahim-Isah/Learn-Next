import { useSession, getSession } from 'next-auth/client';

export default function Testing({ data }) {
	const [session] = useSession();
	return <h1>Products - {data}</h1>;
}

export async function getServerSideProps(context) {
	const session = await getSession(context);

	if (!session) {
		return {
			redirect: {
				destination: `/api/auth/signin?callbackUrl=https://localhost:3000/blog`,
				permanent: false,
			},
		};
	}

	return {
		props: {
			session,
			data: session ? 'List of paid products' : 'List of preview products',
		},
	};
}
