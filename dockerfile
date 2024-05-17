# Используйте официальный образ Node.js с Alpine Linux
FROM node:18-alpine

# Установите рабочий каталог в текущий каталог, где находится Dockerfile
WORKDIR /ani4k-client

# Скопируйте файлы package.json и package-lock.json (если есть)
COPY package*.json ./

# Установите зависимости
RUN npm install

# Скопируйте все файлы проекта в рабочий каталог
COPY . .

# Откройте порт 3000 для доступа к вашему приложению
EXPOSE 3000

# Запустите приложение
CMD ["npm", "run", "dev"]
