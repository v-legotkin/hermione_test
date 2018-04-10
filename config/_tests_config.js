/**
 * Файл с настройками для тестов.
 */

// Время ожидания загрузки элемента в ps3
const waiting_time = 20000;

// Список серверов для запуска тестов
const hosts = ["secure.xsolla.com", "test2-secure.xsolla.com", "fe-secure.srv.local", "cc-secure.srv.local", "demo1-secure.srv.local", "gc-test-secure.srv.local"];

// Сервер на котором запускаются тесты на ps2 и ps3
// Либо значение из hosts или сервер автовыкладывания - "branch_name.ps3.srv.local", "v-2018012504.paystation-client.srv.local"
const root_url_secure = "secure.xsolla.com";

module.exports.waiting_time = waiting_time;

module.exports.root_url_secure = root_url_secure;