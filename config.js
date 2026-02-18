/**
 * Конфигурация для развёртывания на сервере.
 *
 * 1. Создайте приложение на https://oauth.yandex.ru/client/new
 * 2. Права: iot:view, iot:control
 * 3. Callback URI — укажите ТОЧНЫЙ URL вашего сайта (должен совпадать символ в символ!)
 *    Примеры:
 *    - Vercel: https://ваш-проект.vercel.app/
 *    - GitHub Pages: https://username.github.io/ или https://username.github.io/repo-name/
 * 4. Укажите тот же URL в OAUTH_REDIRECT_URI ниже
 */
var YANDEX_OAUTH_CLIENT_ID = '5326f1996a4c4139b8abe1343a06600f';
var API_USE_PROXY = true;
var OAUTH_REDIRECT_URI = 'https://ВАШ-САЙТ.vercel.app/';  // Обязательно! Скопируйте из Callback URI в oauth.yandex.ru
