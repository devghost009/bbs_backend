import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { ServicesService } from './services.service';
export declare class ServicesController {
    private readonly serviceServices;
    private readonly s3Storage;
    constructor(serviceServices: ServicesService, s3Storage: S3Storage);
    getServices(query: pagination, type: string): Promise<{
        data: {
            totalCount: number;
            results: number;
            data: import("./interfaces/services.interface").IService[];
        };
    }>;
    createService(title: string, type: string, files: any): Promise<{
        data: import("./interfaces/services.interface").IService;
    }>;
    updateService(serviceId: string, title: string, type: string, order: string, files: any): Promise<{
        data: import("./interfaces/services.interface").IService;
    }>;
    deleteService(serviceId: string): Promise<{
        data: import("./interfaces/services.interface").IService;
    }>;
}
