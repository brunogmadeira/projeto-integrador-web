# Usar uma imagem Maven para construir o projeto
FROM maven:3.9.5-eclipse-temurin-17 AS build
WORKDIR /app

# Copiar o arquivo pom.xml e baixar as dependências
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copiar todo o código fonte para o container
COPY src ./src

# Construir o projeto
RUN mvn package -DskipTests

# Usar uma imagem menor para executar a aplicação
FROM eclipse-temurin:17-jre AS runtime
WORKDIR /app

# Copiar o jar gerado para o runtime
COPY --from=build /app/target/*.jar app.jar

# Variável de ambiente para configuração
ENV CONNECTION_STRING="jdbc:postgresql://autorack.proxy.rlwy.net:33648/railway?user=postgres&password=dhvDyLHxVWIDvOLwEckTYgJsjQKsowZC"

# Expor a porta padrão do Spring Boot
EXPOSE 8080

# Comando para rodar o aplicativo
CMD ["java", "-jar", "app.jar"]
