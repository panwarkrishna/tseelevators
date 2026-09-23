#!/bin/bash
# Sets permissions ONLY inside public_html/blogs. Nothing else is touched.
# Run via SSH / cPanel Terminal:  bash fix-permissions.sh
set -e
WP="$HOME/public_html/blogs"      # change if your path differs
cd "$WP" || { echo "blogs folder not found: $WP"; exit 1; }

# --- cPanel / shared hosting (PHP runs as your cPanel user) ---
find "$WP" -type d -exec chmod 755 {} \;
find "$WP" -type f -exec chmod 644 {} \;
chmod 600 "$WP/wp-config.php"
mkdir -p "$WP/wp-content/upgrade" "$WP/wp-content/uploads"
chmod 755 "$WP/wp-content" "$WP/wp-content/themes" "$WP/wp-content/plugins" \
          "$WP/wp-content/uploads" "$WP/wp-content/upgrade"

# --- VPS only (PHP runs as www-data / apache / nobody) ---
# Uncomment ONE line below if themes still fail to install:
# sudo chown -R www-data:www-data "$WP/wp-content"   # Ubuntu/Debian
# sudo chown -R apache:apache     "$WP/wp-content"   # CentOS/AlmaLinux

echo "Done. Permissions updated only in: $WP"
