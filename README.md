Clonar el repositorio
**********************
1- Instalar cliente de control de versiones Git
2- Correr comando en la consola de Git.
   git clone https://github.com/Damian21587/Upload-Files.git

Instalar dependencias
********************
1- Intalar Node.js
2- En el directorio Backend
   npm i -g @nestjs/cli
   npm i --save @nestjs/platform-fastify
   npm i --save @nestjs/platform-fastify fastify-multer
   npm install @nestjs/platform-express multer
   npm install --save-dev @types/multer
   npm install @fastify/multipart
   npm i @nestjs/mongoose mongoose
   npm i --save class-validator class-transformer
   npm install firebase
   npm install firebase @nestjs/serve-static
   npm install @nestjs/jwt @nestjs/passport passport passport-jwt
   npm install --save @nestjs/typeorm typeorm mysql2
   npm install sharp
   
3- En directorio Frontend
   npm install -g @angular/cli
   ng add @angular/material
   ng add @nguniversal/express-engine
   npm install @auth0/angular-jw
   ng add @angular/ssr

4- Despliegue en Firebase Hosting para el frontend
   npm install -g firebase-tools
   Navega a la carpeta de tu proyecto Angular y ejecuta: npm install -g firebase-tools
   Selecciona “Hosting: Configure and deploy Firebase Hosting sites”.
    Elige el proyecto de Firebase que deseas usar.
    Define el directorio público como dist/upload-files.
    Responde “No” a la configuración de una aplicación de una sola página (SPA) si no estás seguro.
   Construye tu aplicación Angular para producción:  ng build --prod
   Finalmente, despliega tu aplicación en Firebase Hosting: firebase deploy
    

   
   
   
   
   
