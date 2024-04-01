/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { AppConfigsService } from 'src/app-configs/app-configs.service';
import { ChatsService } from 'src/chats/chats.service';
import { DataRoomService } from 'src/data-room/data-room.service';
import { ILead } from 'src/leads/interfaces/lead.interface';
import { LeadsService } from 'src/leads/leads.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { EmailService } from 'src/utils/utils.email.service';
import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { CreateBusinessDto } from './dto/create-business.dto';
import { CreateDraftBusinessDto } from './dto/create-draft.dto';
import { OwnerTemplateDto } from './dto/owner-template.dto';
import { NotesDto, UpdateBusinessDto } from './dto/update-business.dto';
import { UpdateDraftBusinessDto } from './dto/update-draft.dto';
import { IBusiness } from './interfaces/business.interface';
import { IDraftBusiness } from './interfaces/draftbusiness.interface';
export declare class BusinessService {
    private readonly Business;
    private readonly DraftBusiness;
    private readonly User;
    private readonly Lead;
    private readonly leadsServices;
    private readonly chatsService;
    private readonly s3Storage;
    private readonly dataRoomService;
    private readonly emailService;
    private readonly appConfigService;
    private readonly configService;
    constructor(Business: Model<IBusiness>, DraftBusiness: Model<IDraftBusiness>, User: Model<IUser>, Lead: Model<ILead>, leadsServices: LeadsService, chatsService: ChatsService, s3Storage: S3Storage, dataRoomService: DataRoomService, emailService: EmailService, appConfigService: AppConfigsService, configService: ConfigService);
    deleteImgs(draft: IDraftBusiness): void;
    deleteImagesFn(updateBusinessDto: UpdateBusinessDto, deletedImagesProp: string, imageProp: string): UpdateBusinessDto;
    generateOwnerPdf(ownerTemplate: OwnerTemplateDto): Promise<Buffer>;
    updateBusinessNdaSigned(payload: {
        businessId: string;
        buyerId?: string;
        user: IUser;
    }): Promise<void>;
    getAllBusinessForPublic(query: pagination, city?: string, price?: number, category?: string, brokerId?: string): Promise<{
        results: number;
        business: IBusiness[];
    }>;
    getAllAssignedBusinessForBroker(query: pagination, user: IUser, search: string): Promise<{
        results: number;
        totalCount: number;
        business: IBusiness[];
    }>;
    getAllBusinessWithFilteration(query: pagination, user: IUser, city?: string, price?: number, category?: string, brokerId?: string): Promise<{
        results: number;
        business: IBusiness[];
    }>;
    getSingleBusiness(businessId: string, user: IUser): Promise<IBusiness>;
    getSingleBusinessWithSlug(slug: string, user: IUser): Promise<IBusiness>;
    sendOwnerTemplate(ownerTemplate: OwnerTemplateDto): Promise<{
        ownerTemplate: string;
    }>;
    createDraft(createDraftBusinessDto: CreateDraftBusinessDto): Promise<IDraftBusiness>;
    updateDraft(draftId: string, updateDraftBusinessDto: UpdateDraftBusinessDto): Promise<IDraftBusiness>;
    updateDraftImagesAndCsv(draftId: string, updateDraftBusinessDto: UpdateDraftBusinessDto, files: any): Promise<IDraftBusiness>;
    getSingleDraft(draftId: string): Promise<IDraftBusiness>;
    updateDraftToBusiness(user: IUser, draftId: string): Promise<IBusiness>;
    deleteDraft(draftId: string): Promise<IDraftBusiness>;
    assignBuyersToDataRoom(businessId: string, userIds: string[], user: IUser): Promise<string[]>;
    searchBusinessForMails(search?: string): Promise<{
        business: IBusiness[];
    }>;
    unAssignBuyersToDataRoom(businessId: string, userId: string, user: IUser): Promise<string>;
    getSingleBusinessWithSlugForAdmin(slug: string): Promise<IBusiness>;
    adminGetVipUsersOfBusiness(slug: string): Promise<IUser[]>;
    getInterestedListingsOfBusinessWithSlugForAdmin(slug: string, query: pagination, status: string, search: string): Promise<{
        leads: ILead[];
        totalCount: number;
    }>;
    createBusiness(user: IUser, createBusinessDto: CreateBusinessDto): Promise<IBusiness>;
    businessCategories(): Promise<any[]>;
    businessCities(): Promise<any[]>;
    updateNotes(notesDto: NotesDto): Promise<IBusiness>;
    updateBusiness(updateBusinessDto: UpdateBusinessDto, user: IUser): Promise<IBusiness>;
    updateImagesAndCsv(slug: string, updateBusinessDto: UpdateBusinessDto, files: any): Promise<IBusiness>;
    getAllBusinessForAdmin(query: pagination, status: string, search: string): Promise<{
        results: number;
        countDoc: number;
        business: IBusiness[];
    }>;
    getAllBusinessDraftsForAdmin(query: pagination, status: string, search: string): Promise<{
        results: number;
        countDoc: number;
        businessDrafts: IDraftBusiness[];
    }>;
}
