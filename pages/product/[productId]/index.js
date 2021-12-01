import { useRouter } from 'next/router';

export default function ProductId() {
	const router = useRouter();
	const productId = router.query.productId;
	// console.log('router', router); //for more information about useRouter
	return <h1>Product details page {productId} </h1>;
}
