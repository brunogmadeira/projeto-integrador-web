# Imagem base do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copiar o package.json e o package-lock.json
COPY package.json ./
COPY package-lock.json ./

# Instalação de dependências
RUN npm install

# Copie o restante dos arquivos do projeto
COPY . .


# Porta utilizada no localhost:3000
EXPOSE 3000

# Comando para iniciar o site
CMD ["npm", "run", "dev"]