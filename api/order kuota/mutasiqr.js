export default async function handler(req, res) {
    const { apikey, username, token } = req.query;
    
    if (!apikey || !username || !token) {
        return res.status(400).json({ error: 'Missing required: apikey, username, token' });
    }
    
    const targetUrl = `https://sanzxcode.my.id/orderkuota/mutasiqr?apikey=${encodeURIComponent(apikey)}&username=${encodeURIComponent(username)}&token=${encodeURIComponent(token)}`;
    
    try {
        const response = await fetch(targetUrl);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}