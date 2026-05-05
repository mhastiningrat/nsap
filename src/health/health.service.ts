import { Inject, Injectable } from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';

@Injectable()
export class HealthService {
  constructor(
    @Inject(WINSTON_MODULE_PROVIDER)
    private readonly logger: WinstonLogger,
  ) {}

  check() {
    this.logger.info(`
        STATUS [OK] - UPTIME [${process.uptime()}]`);
    return {
      status: 'ok',
      service: 'nestjs-api',
      uptime: process.uptime(),
      memory: process.memoryUsage(),
    };
  }
}
