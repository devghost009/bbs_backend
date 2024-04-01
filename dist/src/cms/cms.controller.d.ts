import { S3Storage } from 'src/utils/utils.s3';
import { CmsService } from './cms.service';
export declare class CmsController {
    private readonly cmsService;
    private readonly s3Storage;
    constructor(cmsService: CmsService, s3Storage: S3Storage);
    updatePage(pageName: string, _id: string, files: any, body: any): Promise<{
        doc: any;
    }>;
    getDynamicPage(pages: string, all: string): Promise<{
        data: any;
    }>;
    getPage(page: string, testimonial: string, faqs: string): Promise<any>;
}
