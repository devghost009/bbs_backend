import { Model } from 'mongoose';
import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { IService } from './interfaces/services.interface';
export declare class ServicesService {
    private readonly Service;
    private readonly s3Storage;
    constructor(Service: Model<IService>, s3Storage: S3Storage);
    getServices(query: pagination, type: string): Promise<{
        totalCount: number;
        results: number;
        data: IService[];
    }>;
    createService(title: string, type: string, files: any): Promise<IService>;
    updateService(serviceId: string, title: string, type: string, order: string, files: any): Promise<IService>;
    deleteService(serviceId: string): Promise<IService>;
}
