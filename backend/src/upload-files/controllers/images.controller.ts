import { Controller, Post, Body, UploadedFile, UseInterceptors } from '@nestjs/common';
import { Request } from 'express';
import { ImagesService } from '../services/images.service';
import { UploadService } from '../services/upload.service';
import { Image } from '../../schemas/image.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { FastifyFileInterceptor } from '../../fastify-file-interceptor/fastifyFile.interceptor';
import { FastifyRequest } from 'fastify';
import { multerConfig } from '../../multer.config';



@Controller('images')
export class ImagesController {
 
  constructor(
    private readonly uploadService: UploadService,
    private readonly imageService: ImagesService
  ) {}

 @Post()
 @UseInterceptors(FastifyFileInterceptor('file', multerConfig))
 async uploadFile(@UploadedFile() file: Express.Multer.File) {

  const thumbnail = await this.uploadService.resizeImage(file.buffer, 100, 100);
  const medium = await this.uploadService.resizeImage(file.buffer, 500, 500);
  const high = await this.uploadService.resizeImage(file.buffer, 1000, 1000);

   const url = await this.uploadService.uploadFile(file);
   const { originalname: name, size } = file;
   const image = await this.imageService.saveImageDetails(name, size, url);

   return {
      thumbnail: thumbnail.toString('base64'),
      medium: medium.toString('base64'),
      high: high.toString('base64'),
      image:image,
      mensaje: 'Archivo subido exitosamente'
    };
 }

}