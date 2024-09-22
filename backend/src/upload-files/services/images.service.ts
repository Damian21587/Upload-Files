import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Image } from 'src/schemas/image.schema';


@Injectable()
export class ImagesService {
  constructor(@InjectModel(Image.name) private imageModel: Model<Image>) {}

  async saveImageDetails(name: string, size: number, url: string): Promise<Image> {
    const newImage = new this.imageModel({ name, size, url });
    return newImage.save();
  }


}