# Usar uma imagem base do Node.js
FROM node:18-alpine

# Definir o diretório de trabalho dentro do contêiner
WORKDIR /app

# Copiar os arquivos package.json e package-lock.json (se estiver usando npm)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar o restante dos arquivos do projeto
COPY . .

# Build do Next.js (gerar os arquivos estáticos)
RUN npm run build

# Expor a porta que o Next.js vai rodar
EXPOSE 3000

# Comando para rodar a aplicação no contêiner
CMD ["npm", "start"]
