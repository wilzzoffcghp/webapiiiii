export default async function handler(req, res) {
    const { apikey, username, otp } = req.query;
    
    if (!apikey || !username || !otp) {
        return res.status(400).json({ error: 'Missing required: apikey, username, otp' });
    }
    
    const targetUrl = `https://sanzxcode.my.id/orderkuota/gettoken?apikey=${encodeURIComponent(apikey)}&username=${encodeURIComponent(username)}&otp=${encodeURIComponent(otp)}`;
    
    try {
        const response = await fetch(targetUrl);
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}