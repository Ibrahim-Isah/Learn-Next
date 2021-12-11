export default function ArticleList({ data }) {
	return <div className='content'>{data}</div>;
}

export async function getStaticProps(context) {
	// context.previewData to fetch data from the preview

	return {
		props: {
			data: context.preview ? 'List draft' : 'List of publish articles',
		},
	};
}
