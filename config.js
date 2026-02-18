/**
 * Конфигурация. Сайт универсален — работает на GitHub Pages, Vercel, Netlify и любом статическом хостинге.
 *
 * 1. OAuth: oauth.yandex.ru/client/new — права iot:view, iot:control
 * 2. Redirect URI: скопируйте URL с экрана входа
 * 3. API_USE_PROXY = false — для статического хостинга (прямые запросы к API)
 * 4. API_USE_PROXY = true — для локального запуска через python3 proxy.py
 */
var YANDEX_OAUTH_CLIENT_ID = 'c161631e11ae42eba1870c0854cb9280';
var API_USE_PROXY = false;
var OAUTH_REDIRECT_URI = 'https://yahom.vercel.app/';
