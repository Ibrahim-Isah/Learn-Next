export default function handler(req, res) {
	res.setPreviewData({});
	res.redirect(req.query.redirect); // this will redirect one from a page to another
}
