import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { LoggingInterceptor } from 'interceptors/logging.interceptor';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger as WinstonLogger } from 'winston';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  app.useGlobalInterceptors(new LoggingInterceptor());
  const port = configService.get<number>('PORT') || 3033;
  await app.listen(port);
  const logger = app.get<WinstonLogger>(WINSTON_MODULE_PROVIDER);

  logger.info(`🚀 Services running on test port : ${port}`);
}
bootstrap();
