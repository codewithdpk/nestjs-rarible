import { Controller, Get } from '@nestjs/common';
import { ProcessMetaProvider } from './processMeta.provider';

@Controller()
export class ProcessMetaController {
  constructor(private readonly processMetaProvider: ProcessMetaProvider) {}

  @Get("process-meta")
  getHello(): string {
    return this.processMetaProvider.getHello();
  }
}
