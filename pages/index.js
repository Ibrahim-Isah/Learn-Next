import Link from 'next/link';

// -------------------------------------Static Generation ------------------------------------------

export default function Home() {
	return (
		<>
			<h1>Rendring things</h1>
			<Link href='/posts'>
				<a>Posts</a>
			</Link>
		</>
	);
}

// -------------------------- Routing Section -----------------------------------
// import { useRouter } from 'next/router';

// export default function Home() {
// 	const router = useRouter();
// 	const handleClick = () => {
// 		console.log('Placing your order');
// 		router.push('/product');
// 		// can also use replace in place or push
// 	};
// 	return (
// 		<div>
// 			<h1>Hello World</h1>
// 			<Link href='/product'>
// 				<a>Product page</a>
// 			</Link>
// 			<Link href='/blog'>
// 				<a>Blog</a>
// 			</Link>
// 			<button onClick={handleClick}>Place order</button>
// 		</div>
// 	);
// }
