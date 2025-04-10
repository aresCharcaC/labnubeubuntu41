FROM node:18-alpine

WORKDIR /app

# Copiar los archivos de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el resto de los archivos del proyecto
COPY . .

# Exponer el puerto que usará la aplicación
EXPOSE 9000

# Comando para iniciar la aplicación
CMD ["node", "app.js"]
