/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { AppConfigsService } from 'src/app-configs/app-configs.service';
import { BusinessService } from 'src/business/business.service';
import { IBusiness } from 'src/business/interfaces/business.interface';
import { ChatsService } from 'src/chats/chats.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { EmailService } from 'src/utils/utils.email.service';
import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { NotesDto } from './dto/create-lead.dto';
import { SendTemplateDto } from './dto/send-template.dto';
import { SignNdaDto } from './dto/sign-nda.dto';
import { ILead } from './interfaces/lead.interface';
export declare class LeadsService {
    private readonly Lead;
    private readonly User;
    private readonly Business;
    private readonly businessService;
    private readonly emailService;
    private readonly notificationService;
    private readonly chatsService;
    private readonly configService;
    private readonly s3Storage;
    private readonly appConfigService;
    constructor(Lead: Model<ILead>, User: Model<IUser>, Business: Model<IBusiness>, businessService: BusinessService, emailService: EmailService, notificationService: NotificationsService, chatsService: ChatsService, configService: ConfigService, s3Storage: S3Storage, appConfigService: AppConfigsService);
    generateNdaPdf(sendTemplateDto: SendTemplateDto): Promise<Buffer>;
    generateSignNdaPdf(userSignNda: object): Promise<Buffer>;
    updateLeadBrokers(params: {
        businessId: string;
        oldBrokers: string[];
        excludedBrokers: string[];
        newBrokers: string[];
    }): Promise<void>;
    sendTemplatePdfToBuyer(sendTemplateDto: SendTemplateDto): Promise<{
        template: string;
    }>;
    getLeads(query: pagination, status: string, search: string, user: IUser): Promise<{
        lead: ILead[];
        countDoc: number;
        results: number;
    }>;
    updateNotes(notesDto: NotesDto): Promise<ILead>;
    getLeadsOnOwnedBusiness(query: pagination, user: IUser): Promise<{
        lead: ILead[];
        results: number;
    }>;
    createLead(businessId: string, user: IUser): Promise<ILead>;
    signNda(user: IUser, signNdaDto: SignNdaDto): Promise<ILead>;
    updateNdaContract(leadId: string, status: string, user: IUser): Promise<ILead>;
    updateLeadStatus(user: IUser, leadId: string, status?: string, leadProgress?: string, memorandum?: string): Promise<ILead>;
    adminGetLeadsBySlug(slug: string): Promise<ILead[]>;
    adminGetAllLeads(query: pagination, status: string, search: string, outsideLead: string): Promise<{
        lead: ILead[];
        results: number;
        countDoc: number;
    }>;
    adminGetleadDetails(id: string): Promise<any>;
    endLeads(payload: {
        business: string;
        buyerIds: string[];
    }): Promise<void>;
}
