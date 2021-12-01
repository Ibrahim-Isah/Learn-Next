import Link from 'next/link';

export default function Home() {
	return (
		<div>
			<h1>Hello World</h1>
			<Link href='/product'>
				<a>Product page</a>
			</Link>
			<Link href='/blog'>
				<a>Blog</a>
			</Link>
		</div>
	);
}
