export default function ArticleListByCategory({ articles, category }) {
	return (
		<>
			<h1>
				Showing Article based on <i>{category}</i>
			</h1>
			{articles.map((article) => {
				return (
					<div key={article.id}>
						<h2>
							{article.id} {article.title} | {article.category}
						</h2>
						<p>{article.description}</p>
						<hr />
					</div>
				);
			})}
		</>
	);
}

export async function getServerSideProps(context) {
	const { params, res, req, query } = context;
	// console.log('query' , query) The query can be used to access anything from the URL. e.g parameters
	// console.log(req.headers.cookie); accessing the cookie stored on the browser
	// res.setHeader('Set-Cookie', ['name=Isah']); this is use to setcookie for example to save some token stuff
	const { category } = params;

	const response = await fetch(
		`http://localhost:4000/news?category=${category}`
	);
	const data = await response.json();

	return {
		props: {
			articles: data,
			category,
		},
	};
}
