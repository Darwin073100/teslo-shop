# Teslo Shop
Aplicación web de ventas online de ropa y accesorios, clon de la tienda oficial de Tesla.


## Instrucciones para correr proyecto en desarrollo

1. Clonar el repositorio.
2. Crear una copia del: ```.env.template``` y renombrarlo a: ```.env``` y cambiar las variables de entorno.
3. Instalar dependencias: ```npm install```
4. Levantar la base de datos con docker: ```docker compose up -d```
5. Correr las migraciones de Primsa: ```npx prisma migrate dev```
6. Ejecutar seed: ```npm run seed```
7. Correr el proyecto: ```npm run dev```