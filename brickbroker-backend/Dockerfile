FROM openjdk:17-jdk-slim
WORKDIR /app

COPY target/brickbroker-backend-0.0.1-SNAPSHOT.jar app.jar

EXPOSE 8080

CMD ["sh", "-c", "java -jar app.jar"]
