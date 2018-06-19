all:

run:
	php -S 127.0.0.1:8080

sass-watch:
	gulp sass:watch

install:
	composer install
	npm install
