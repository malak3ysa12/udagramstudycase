rsync  --verbose --archive --exclude "config/"  /var/www/release/ /var/www/html/admin.theblock49.com/ > /var/log/deploy.log
cd  /var/www/html/admin.theblock49.com/
composer install
