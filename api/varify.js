export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { email, key } = req.query;
  const response = await fetch(
    `https://emailverifier.reoon.com/api/v1/verify?email=${email}&key=${key}&mode=power`
  );
  const data = await response.json();
  res.json(data);
}
