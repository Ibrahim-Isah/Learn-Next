module.exports = {
	reactStrictMode: true,
	redirects: async () => {
		return [
			{
				source: '/contact',
				destination: '/',
				permanent: true,
			},
		];
	},
};
