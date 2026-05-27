export default async function handler(req, res) {
    const { apikey, username, password } = req.query;
    
    if (!apikey || !username || !password) {
        return res.status(400).json({ error: 'Missing required: apikey, username, password' });
    }
    
    const targetUrl = `https://sanzxcode.my.id/orderkuota/getotp?apikey=${encodeURIComponent(apikey)}&username=${encodeURIComponent(username)}&password=${encodeURIComponent(password)}`;
    
    try {
        const response = await fetch(targetUrl);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}
