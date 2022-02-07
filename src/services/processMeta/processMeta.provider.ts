import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class ProcessMetaProvider {
  private readonly logger = new Logger(ProcessMetaProvider.name);

  async processMetaData(): Promise<void> {
    this.logger.log('Entering for processing meta data');
  }
}
