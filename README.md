# Онлайн задачник для сотрудников Совкомбанка

Инструкция по развертыванию приложения локально.
Предварительно следует устноваить:

> git, go, npm, node.js

Для начала клонируйте репозиторий с бэкендом на свой локальный компьютер. Откройте терминал и выполните следующие команды:

```bash
git clone https://github.com/treemorse/SigmaBank.git
cd SigmaBank
go get
```

Затем запустите функцию main:

```bash
go run main.go
```

После этого склонируйте данный репозиторий:

```bash
git clone https://github.com/jintonick/SigmaBank.git
cd SigmaBank
npm install
```

Запустите приложение:

```bash
npm start
```

Приложение должно автоматически открыться в вашем браузере по адресу `http://localhost:3000`
