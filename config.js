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
var YANDEX_OAUTH_CLIENT_ID = 'c161631e11ae42eba1870c0854cb9280';
var API_USE_PROXY = true;
var OAUTH_REDIRECT_URI = 'https://yahom.vercel.app/';
