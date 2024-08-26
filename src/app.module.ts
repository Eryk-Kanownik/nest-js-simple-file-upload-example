import { Module } from '@nestjs/common';
import { UploadModule } from './_modules/upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../', 'uploads'),
      serveRoot: '/uploads/', //important to actually serve files not only SPAs
    }),
    UploadModule,
  ],
})
export class AppModule {}
