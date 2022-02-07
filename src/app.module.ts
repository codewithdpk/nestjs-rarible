import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProcessMetaController } from './services/processMeta/processMeta.controller';

@Module({
  imports: [ProcessMetaController],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
