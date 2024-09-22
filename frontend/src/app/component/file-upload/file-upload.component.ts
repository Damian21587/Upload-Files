import { Component,OnInit  } from '@angular/core';
import { FileUploadService } from '../../services/file-upload.service';

@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [],
  templateUrl: './file-upload.component.html',
  styleUrl: './file-upload.component.css'
})
export class FileUploadComponent implements OnInit {
  images: any[] = [];
  file: File | null = null;
  fileError: string | null = null;
  maxSizeInBytes = 5 * 1024 * 1024; // 5 MB


  constructor(private fileUploadService: FileUploadService) {}

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const selectedFile = input.files[0];
      const allowedTypes = ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'];
      if (!allowedTypes.includes(selectedFile.type)) {
        this.file = null;
        this.fileError = 'Tipo de archivo no permitido. Solo se permiten imágenes y PDFs.';
      } else if (selectedFile.size > this.maxSizeInBytes) {
        this.file = null;
        this.fileError = `El archivo es demasiado grande. El tamaño máximo permitido es de ${this.maxSizeInBytes / (1024 * 1024)} MB.`;
      }else {
        this.file = selectedFile;
        this.fileError = null;
      }
      /* else if (selectedFile.type.startsWith('image/')) {
        const img = new Image();
        img.onload = () => {
          const width = img.width;
          const height = img.height;
    
          if (width > 1280 || height > 720) {
            this.fileError = 'La resolución máxima permitida es 1280x720.';
          }else if (width >  640 || height > 480){
            this.fileError = 'La resolución máxima permitida es 640x480 .';
          }
    
          // Procesar la imagen
        };
      } */
    }
  }

  uploadFile(): void {
    if (this.file) {
      this.fileUploadService.uploadFile(this.file).subscribe(response => {
        console.log('Archivo subido exitosamente', response);
      });
    }
  }

  ngOnInit(): void {
    this.fileUploadService.getFileUpload().subscribe(data => {
   /*    this.images = data; */
    });
  }
}
