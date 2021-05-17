rsync  --verbose --archive --exclude "config/"  /var/www/release/ /var/www/html/ > /var/log/deploy.log
cd  /var/www/html/
# composer install
