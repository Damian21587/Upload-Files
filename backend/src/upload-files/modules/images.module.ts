import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ImagesController } from 'src/upload-files/controllers/images.controller';
import { ImagesService } from 'src/upload-files/services/images.service';
import { Image, ImageSchema } from 'src/schemas/image.schema';
import { MulterModule , } from '@nestjs/platform-express';

@Module({
  imports: [MongooseModule.forFeature([{ name: Image.name, schema: ImageSchema }]),
  MulterModule.register({
    dest: './uploads',
  })],
  controllers: [ImagesController],
  providers: [ImagesService],
})
export class ImagesModule {}