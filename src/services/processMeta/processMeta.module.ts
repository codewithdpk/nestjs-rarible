import { Module } from '@nestjs/common';
import { ProcessMetaController } from './processMeta.controller';
import { ProcessMetaProvider } from './processMeta.provider';

@Module({
  imports: [],
  controllers: [ProcessMetaController],
  providers: [ProcessMetaProvider],
})
export class ProcessMetaModule {}
