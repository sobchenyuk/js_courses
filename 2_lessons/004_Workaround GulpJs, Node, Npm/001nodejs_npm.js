Установка node.js

	Windows & Mac
		Простая установка с офсайта

	Linux Debian
		$ sudo apt-get update
		$ sudo apt-get install nodejs
		$ sudo apt-get install npm

	Установка с помощью NVM 
		$ sudo apt-get update
		$ sudo apt-get install build-essential libssl-dev
		$ curl https://raw.githubusercontent.com/creationix/nvm/v0.16.1/install.sh | sh - загрузка и установка скрипта
		$ source ~/.profile - релогин сессии
		$ nvm ls-remote - проверить доступность версий
		$ nvm install 0.11.13 - установка выбранной версии
		$ nvm use 0.11.13 - использование установленной версии
		$ node -v - версия nodejs
		$ nvm alias default 0.11.13 - создание ссылки на использываемаю версию
		