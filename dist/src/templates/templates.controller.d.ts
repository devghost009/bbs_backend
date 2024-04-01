import { IUser } from 'src/users/interfaces/user.interface';
import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { TemplatesService } from './templates.service';
export declare class TemplatesController {
    private readonly templatesService;
    private readonly s3Storage;
    constructor(templatesService: TemplatesService, s3Storage: S3Storage);
    getAllActiveTemplates(query: pagination): Promise<{
        results: number;
        data: import("./interfaces/template.interface").ITemplate[];
    }>;
    getSingleTemplate(templateId: string): Promise<{
        data: import("./interfaces/template.interface").ITemplate;
    }>;
    sendTemplateMailsToUser(templateId: string, userIds: string[], cc: string[], user: IUser): Promise<any>;
    sendMailToAllFilteredUsers(user: IUser, userIds: string[], templateId: string, cc: string[]): Promise<{
        message: string;
    }>;
    groupSendTemplateMailsToUser(user: IUser, templateId: string, groupId: string, interestStatus: string[], listingIds: string[], categoryIds: string[], cities: string[], cc: string[]): Promise<{
        data: string;
    }>;
    createTemplate(subject: string, message: string, files: any): Promise<import("./interfaces/template.interface").ITemplate>;
    updateTemplate(id: string, subject: string, message: string, deletedAttachments: string[], isActive: boolean, files: any): Promise<import("./interfaces/template.interface").ITemplate>;
    deleteTemplate(id: string): Promise<import("./interfaces/template.interface").ITemplate>;
    getTemplateAdmin(query: pagination): Promise<{
        results: number;
        data: import("./interfaces/template.interface").ITemplate[];
    }>;
}
