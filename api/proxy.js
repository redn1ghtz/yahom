/**
 * Прокси для api.iot.yandex.net — обход CORS.
 * Работает только при деплое на Vercel.
 */
const https = require('https');
const http = require('http');

module.exports = async (req, res) => {
  const path = req.query.path || '';
  const streamUrl = req.query.url;

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const auth = req.headers.authorization || '';

  if (path === 'stream' && streamUrl) {
    const protocol = streamUrl.startsWith('https') ? https : http;
    const headers = { 'User-Agent': 'Mozilla/5.0' };
    if (req.headers.range) headers['Range'] = req.headers.range;
    const proxyReq = protocol.get(streamUrl, {
      headers: headers,
      rejectUnauthorized: false
    }, (proxyRes) => {
      res.status(proxyRes.statusCode);
      res.setHeader('Content-Type', proxyRes.headers['content-type'] || 'video/mp4');
      res.setHeader('Accept-Ranges', 'bytes');
      const cl = proxyRes.headers['content-length'];
      if (cl) res.setHeader('Content-Length', cl);
      const cr = proxyRes.headers['content-range'];
      if (cr) res.setHeader('Content-Range', cr);
      proxyRes.pipe(res, { end: true });
    });
    proxyReq.on('error', () => res.status(502).json({ error: 'Stream error' }));
    return;
  }

  const url = 'https://api.iot.yandex.net/' + path;
  const body = req.method === 'POST' && req.body ? (typeof req.body === 'string' ? req.body : JSON.stringify(req.body)) : null;

  const options = {
    method: req.method,
    headers: {
      'Authorization': auth,
      'Content-Type': 'application/json',
      'User-Agent': 'Mozilla/5.0',
      'Accept-Language': 'ru-RU,ru;q=0.9'
    },
    rejectUnauthorized: false
  };

  const proxyReq = https.request(url, options, (proxyRes) => {
    res.status(proxyRes.statusCode);
    res.setHeader('Content-Type', proxyRes.headers['content-type'] || 'application/json');
    proxyRes.pipe(res, { end: true });
  });

  proxyReq.on('error', (err) => {
    res.status(502).json({ error: String(err.message) });
  });

  if (body) proxyReq.write(body);
  proxyReq.end();
};
