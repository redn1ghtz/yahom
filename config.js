/**
 * Конфигурация.
 *
 * OAuth: oauth.yandex.ru/client/new — права iot:view, iot:control
 * Redirect URI: скопируйте URL с экрана входа
 *
 * API_USE_PROXY:
 * - true — Vercel или python3 proxy.py (обход CORS)
 * - false — только GitHub Pages (API может не работать из-за CORS)
 */
var YANDEX_OAUTH_CLIENT_ID = '5326f1996a4c4139b8abe1343a06600f';
var API_USE_PROXY = true;
var OAUTH_REDIRECT_URI = '';
