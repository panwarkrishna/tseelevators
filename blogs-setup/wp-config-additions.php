<?php
/* Paste ABOVE the line: "That's all, stop editing! Happy publishing."
   in public_html/blogs/wp-config.php */

define( 'WP_HOME',    'https://tseelevators.com/blogs' );
define( 'WP_SITEURL', 'https://tseelevators.com/blogs' );

// Install/update themes & plugins directly (no FTP credentials popup)
define( 'FS_METHOD', 'direct' );
define( 'FS_CHMOD_DIR',  ( 0755 & ~ umask() ) );
define( 'FS_CHMOD_FILE', ( 0644 & ~ umask() ) );

// Allow theme/plugin install from wp-admin
define( 'DISALLOW_FILE_MODS', false );
