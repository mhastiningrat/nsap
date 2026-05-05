import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';

@Injectable()
export class AppService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: WinstonLogger,
  ) {}

  getHello(): string {
    this.logger.info('Call Hello World');
    return 'Hello World!';
  }
}
