export default function handler(req, res) {
	const { redirect } = req.query;
	res.clearPreviewData();
	res.redirect(redirect);
	// res.end('Preview articles ended');
}
