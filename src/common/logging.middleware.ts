import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { prismaClient } from 'src/database/prismaClient';

@Injectable()
export class LoggingMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;
    const logEntry = {
      ip,
      method: method,
      route: originalUrl,
      status: null,
      data: null
    };

    res.on('finish', async () => {
      logEntry.status = res.statusCode;

      if (res.statusCode >= 400) {
        logEntry.data = { body: req.body };
      }
      await prismaClient.logs.create({
        data: logEntry
      });
    });

    next();
  }
}