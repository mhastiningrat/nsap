import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { WinstonModule } from 'nest-winston';
import * as winston from 'winston';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // biar bisa dipakai di semua module
    }),
    WinstonModule.forRoot({
      format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.json(),
      ),
      transports: [
        // ✅ Access / general log
        new winston.transports.File({
          filename: 'logs/app.log',
          level: 'info',
        }),

        // ✅ Error log khusus
        new winston.transports.File({
          filename: 'logs/error.log',
          level: 'error',
        }),

        // ✅ Console (dev)
        new winston.transports.Console({
          format: winston.format.simple(),
        }),
      ],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
