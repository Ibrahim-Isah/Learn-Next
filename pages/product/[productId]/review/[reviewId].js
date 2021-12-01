import { useRouter } from 'next/router';

export default function Review() {
	const router = useRouter();
	// console.log('router', router);
	const { productId, reviewId } = router.query;
	return (
		<h1>
			Review {reviewId} of Product {productId}{' '}
		</h1>
	);
}
