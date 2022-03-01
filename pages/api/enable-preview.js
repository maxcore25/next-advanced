export default function handler(req, res) {
  res.setPreviewData({ something: true }); // set some cookies

  res.status(200).json({ name: 'John Doe' });
}
