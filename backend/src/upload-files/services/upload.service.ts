import { Injectable } from '@nestjs/common';
import { storage } from 'src/firebase.config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import * as sharp from 'sharp';

@Injectable()
export class UploadService {
  async uploadFile(file: Express.Multer.File): Promise<string> {
    const storageRef = ref(storage, `images/${file.originalname}`);
    await uploadBytes(storageRef, file.buffer);
    const downloadURL = await getDownloadURL(storageRef);
    return downloadURL;

    /* const chunkSize = 1024 * 1024 * 5; // 5MB
    const totalChunks = Math.ceil(file.size / chunkSize);

    for (let i = 0; i < totalChunks; i++) {
      const start = i * chunkSize;
      const end = Math.min(start + chunkSize, file.size);
      const chunk = file.slice(start, end);
  
      const formData = new FormData();
      formData.append('file', chunk, file.filename);
  
      await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });
    } */

    
  }

  async resizeImage(buffer: Buffer, width: number, height: number): Promise<Buffer> {
    return sharp(buffer)
      .resize(width, height)
      .toBuffer();
  }
}