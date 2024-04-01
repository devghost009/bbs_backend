import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { AppConfigsService } from 'src/app-configs/app-configs.service';
import { IBusiness } from 'src/business/interfaces/business.interface';
import { IGroup } from 'src/groups/interfaces/group.interface';
import { ILead } from 'src/leads/interfaces/lead.interface';
import { IUser } from 'src/users/interfaces/user.interface';
import { EmailService } from 'src/utils/utils.email.service';
import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { ITemplate } from './interfaces/template.interface';
export declare class TemplatesService {
    private readonly Template;
    private readonly User;
    private readonly Business;
    private readonly Lead;
    private readonly Group;
    private readonly s3Storage;
    private readonly emailService;
    private readonly appConfigsService;
    private readonly configService;
    constructor(Template: Model<ITemplate>, User: Model<IUser>, Business: Model<IBusiness>, Lead: Model<ILead>, Group: Model<IGroup>, s3Storage: S3Storage, emailService: EmailService, appConfigsService: AppConfigsService, configService: ConfigService);
    sendMailToAllFilteredUsers(parmas: {
        user: IUser;
        templateId: string;
        userIds: string[];
        cc: string[];
    }): Promise<{
        message: string;
    }>;
    sendTemplateMails(templateId: string, users: IUser[], user: IUser, cc: string[]): Promise<void>;
    getBusinessIds(params: {
        cities?: string[];
        categories?: string[];
    }): Promise<string[]>;
    getleadUsers(businessIds: string[], status?: string[]): Promise<IUser[]>;
    getAllActiveTemplates(query: pagination): Promise<ITemplate[]>;
    getSingleTemplate(templateId: string): Promise<ITemplate>;
    createTemplate(subject: string, message: string, files: any): Promise<ITemplate>;
    updateTemplate(id: string, subject: string, message: string, deletedAttachments: string[], isActive: boolean, files: any): Promise<ITemplate>;
    deleteTemplate(id: string): Promise<ITemplate>;
    getTemplateAdmin(query: pagination): Promise<ITemplate[]>;
    groupSendTemplateMailsToUser(params: {
        user: IUser;
        templateId: string;
        groupId: string;
        listingIds: string[];
        interestStatus: string[];
        categoryIds: string[];
        cities: string[];
        cc: string[];
    }): Promise<string>;
    sendTemplateMailsToUser(templateId: string, userIds: string[], cc: string[], user: IUser): Promise<any>;
}
