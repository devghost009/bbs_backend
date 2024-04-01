import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ConfigService } from '@nestjs/config';
export declare class LoggerMiddleware implements NestMiddleware {
    private readonly configService;
    constructor(configService: ConfigService);
    use(request: Request, response: Response, next: NextFunction): void;
}
