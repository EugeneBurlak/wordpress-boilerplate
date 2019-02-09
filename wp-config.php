<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'lawyer');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', 'root');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '$3+Mg]-:0$wj1kaK-s/n^9&dR_U})A}`@z{%/_lt&J46k2|,[GEF|,kz =Sc_ouX');
define('SECURE_AUTH_KEY',  '}r]SL.}qof}r V&nW]rvdnR&a9nHkySo={#|^wp>Dq5Ln3- DUfzEKDw6iv`o6ZN');
define('LOGGED_IN_KEY',    '2lISUq3kV`Z9NG`^LE29{v35na+#QVgTqhB[Z/gsrYz3:YppHN-/7jy^c_M?AKHt');
define('NONCE_KEY',        '|6I<Zdj3-wN7h.SFJMn@<brT_EmLSf_6=w_&SX*P8uIi$>Gsf?k{z$.C;Y` /8AM');
define('AUTH_SALT',        '!xua?c,e-*rHrl$fS$06UwFo[(e&&?{-WRF-CTJjy29ja+%z HaC+vWQA9_(?4J=');
define('SECURE_AUTH_SALT', '`~~+aft|1H.J>9Os]Gk)4Ab 2!KdNmB(KIFHTXChcHOO|gM5s*>nU32lum{ob)fj');
define('LOGGED_IN_SALT',   '~MH(Dl3Ft}Qc#;/-Xd^DaB^I8aC(~V0if}Ak+&Wax)BQe<Cb,?GZu{76_{g i:es');
define('NONCE_SALT',       'IsPt`DoTyp5qiw[rBh!ZZHSg6GoUQz)&qDJpp&in[uo[mWZ:6k6`y>,!,LM%`&+H');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'law_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
