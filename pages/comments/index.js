import { useState } from 'react';

export default function CommentsPage() {
	const [comments, setComments] = useState([]);
	const [comment, setComment] = useState('');

	const fetchComments = async () => {
		const response = await fetch(`/api/comments`);
		const data = await response.json();

		setComments(data);
	};

	const submitComment = async () => {
		const response = await fetch('/api/comments', {
			method: 'POST',
			body: JSON.stringify({ comment }),
			headers: {
				'Content-Type': 'application/json',
			},
		});
		const data = response.json();
		console.log(data);
	};

	const deleteComment = async (commentId) => {
		const response = await fetch(`/api/comments/${commentId}`, {
			method: 'DELETE',
		});
		const data = await response.json();
		fetchComments();
		console.log(data);
	};

	return (
		<>
			<input
				type='text'
				value={comment}
				onChange={({ target }) => setComment(target.value)}
			/>
			<button onClick={submitComment}>Submit</button>
			<button onClick={fetchComments}>Load comments</button>
			{comments.map((comment) => {
				return (
					<div key={comment.id}>
						{comment.id} {comment.text}
						<button onClick={() => deleteComment(comment.id)}>Delete</button>
					</div>
				);
			})}
		</>
	);
}
