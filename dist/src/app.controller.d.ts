import { ConfigService } from '@nestjs/config';
import { Response } from 'express';
import { S3Storage } from './utils/utils.s3';
export declare class AppController {
    private readonly s3Storage;
    private readonly configService;
    constructor(s3Storage: S3Storage, configService: ConfigService);
    greetings(): {
        message: string;
    };
    Images(files: any): Promise<any>;
    deleteImages(images: string[]): Promise<any>;
    serveImages(key: string, res: Response): Promise<any>;
    serveMedia(key: string, res: Response): Promise<any>;
}
