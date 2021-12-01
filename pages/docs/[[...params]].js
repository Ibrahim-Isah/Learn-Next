import { useRouter } from 'next/router';

export default function Doc() {
	const router = useRouter();
	const { params = [] } = router.query;

	console.log('params', params);
	if (params.length === 2) {
		return (
			<h2>
				This is for feature {params[0]} and concept {params[1]}{' '}
			</h2>
		);
	} else if (params.length === 1) {
		return <h2>this is the feature {params[0]} </h2>;
	}

	return <h1>Docs home Page</h1>;
}
