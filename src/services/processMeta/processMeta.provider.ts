import { Injectable } from '@nestjs/common';

@Injectable()
export class ProcessMetaProvider {
  getHello(): string {
    return 'Hello World!';
  }
}
