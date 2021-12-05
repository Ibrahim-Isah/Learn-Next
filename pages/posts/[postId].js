import { useRouter } from 'next/router';

export default function Post({ post }) {
	const router = useRouter();

	if (router.isFallback) {
		return <h1>Loading...</h1>;
	}
	return (
		<>
			<h2>
				{post.id} {post.title}
			</h2>
			<p>{post.body}</p>
		</>
	);
}

export async function getStaticPaths() {
	const response = await fetch('https://jsonplaceholder.typicode.com/posts');
	const data = await response.json();

	// const paths = data.map((post) => {
	// 	return {
	// 		params: {
	// 			postId: `${post.id}`,
	// 		},
	// 	};
	// });
	return {
		paths: [
			{ params: { postId: '1' } },
			{ params: { postId: '2' } },
			{ params: { postId: '3' } },
		],
		fallback: true,
		// fallback: false, when all page are pre-rendered
		// fallback: blocking, this should be used mostly when problem with true
	};
}

export async function getStaticProps(context) {
	// the context pass as param meter will help us get the post id
	const { params } = context;
	const response = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${params.postId}`
	);
	const data = await response.json();

	if (!data.id) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			post: data,
		},
	};
}
