import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

@Controller('/file-upload')
export default class UploadController {
  @Post('/')
  @UseInterceptors(
    FileInterceptor('file', {
      storage: diskStorage({
        destination: './uploads/',
        filename(req, file, callback) {
          callback(null, file.originalname); //set up default filename after upload
        },
      }),
    }),
  )
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return {
      message: `${file.originalname} uploaded and is accesible at http://localhost:3000/uploads/${file.originalname}`,
    };
  }
}
