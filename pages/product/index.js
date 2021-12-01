import Link from 'next/link';

export default function Product({ productId = 100 }) {
	return (
		<>
			<h2>
				<Link href='/product/1'>
					<a>Product 1</a>
				</Link>
			</h2>
			<h2>
				<Link href='/product/2'>
					<a>Product 2</a>
				</Link>
			</h2>
			<h2>
				<Link href='/product/3' replace>
					{/* the replace props makes it go back to the homepage  */}
					<a>Product 3</a>
				</Link>
			</h2>
			<h2>
				<Link href={`/product/${productId}`}>
					<a>Product {productId}</a>
				</Link>
			</h2>
		</>
	);
}
