import { comments } from '../../data/comments';

export default function Comment({ comment }) {
	return (
		<>
			<h2>
				{comment.id} {comment.text}
			</h2>
		</>
	);
}

export async function getStaticPaths() {
	return {
		paths: [
			{ params: { commentId: '1' } },
			{ params: { commentId: '2' } },
			{ params: { commentId: '3' } },
		],
		fallback: false,
	};
}

export async function getStaticProps(context) {
	const { params } = context;
	const { commentId } = params;

	const comment = comments.find(
		(comment) => comment.id === parseInt(commentId)
	);

	// const response = await fetch(
	// 	`http://localhost:3000/api/comments/${commentId}`
	// );
	// const data = await response.json();
	// Do not always call your own api rather use them directly

	return {
		props: {
			comment,
		},
	};
}
