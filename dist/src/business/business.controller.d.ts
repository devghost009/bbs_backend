import { LeadsService } from 'src/leads/leads.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { BusinessService } from './business.service';
import { CreateBusinessDto } from './dto/create-business.dto';
import { CreateDraftBusinessDto } from './dto/create-draft.dto';
import { OwnerTemplateDto } from './dto/owner-template.dto';
import { NotesDto, UpdateBusinessDto } from './dto/update-business.dto';
import { UpdateDraftBusinessDto } from './dto/update-draft.dto';
export declare class BusinessController {
    private readonly businessService;
    private readonly leadService;
    private readonly s3Storage;
    constructor(businessService: BusinessService, leadService: LeadsService, s3Storage: S3Storage);
    getAllBusinessWithFilteration(query: pagination, user: IUser, city?: string, price?: number, category?: string, brokerId?: string): Promise<{
        results: number;
        business: import("./interfaces/business.interface").IBusiness[];
    }>;
    getAllBusinessForPublic(query: pagination, city?: string, price?: number, category?: string, brokerId?: string): Promise<{
        results: number;
        business: import("./interfaces/business.interface").IBusiness[];
    }>;
    getAllAssignedBusinessForBroker(query: pagination, search: string, user: IUser): Promise<{
        results: number;
        totalCount: number;
        business: import("./interfaces/business.interface").IBusiness[];
    }>;
    businessCities(): Promise<{
        data: {
            cities: any[];
        };
    }>;
    businessCategories(): Promise<{
        data: {
            categories: any[];
        };
    }>;
    searchBusinessForMails(search: string): Promise<{
        data: {
            business: import("./interfaces/business.interface").IBusiness[];
        };
    }>;
    getSingleBusiness(businessId: string, user: IUser): Promise<import("./interfaces/business.interface").IBusiness>;
    getAllBusinessForAdmin(query: pagination, status: string, search: string): Promise<{
        results: number;
        countDoc: number;
        business: import("./interfaces/business.interface").IBusiness[];
    }>;
    getAllBusinessDraftsForAdmin(query: pagination, status: string, search: string): Promise<{
        results: number;
        countDoc: number;
        businessDrafts: import("./interfaces/draftbusiness.interface").IDraftBusiness[];
    }>;
    createBusiness(user: IUser, createBusinessDto: CreateBusinessDto): Promise<import("./interfaces/business.interface").IBusiness>;
    createDraft(createDraftBusinessDto: CreateDraftBusinessDto): Promise<{
        data: import("./interfaces/draftbusiness.interface").IDraftBusiness;
    }>;
    updateDraftToBusiness(user: IUser, draftId: string): Promise<{
        data: import("./interfaces/business.interface").IBusiness;
    }>;
    getSingleDraft(draftId: string): Promise<{
        data: import("./interfaces/draftbusiness.interface").IDraftBusiness;
    }>;
    assignedBuyerToDataRoom(businessId: string, userIds: string[], user: IUser): Promise<{
        data: string[];
    }>;
    unAssignBuyersToDataRoom(businessId: string, userId: string, user: IUser): Promise<{
        data: string;
    }>;
    updateNotes(notesDto: NotesDto): Promise<import("./interfaces/business.interface").IBusiness>;
    updateBusiness(updateBusinessDto: UpdateBusinessDto, user: IUser): Promise<import("./interfaces/business.interface").IBusiness>;
    updateDraft(draftId: string, updateDraftBusinessDto: UpdateDraftBusinessDto): Promise<{
        data: import("./interfaces/draftbusiness.interface").IDraftBusiness;
    }>;
    sendOwnerTemplate(ownerTemplate: OwnerTemplateDto): Promise<{
        data: {
            ownerTemplate: string;
        };
    }>;
    updateImagesAndCsv(slug: string, updateBusinessDto: UpdateBusinessDto, files: any): Promise<import("./interfaces/business.interface").IBusiness>;
    updateDraftImagesAndCsv(draftId: string, updateDraftBusinessDto: UpdateDraftBusinessDto, files: any): Promise<{
        data: import("./interfaces/draftbusiness.interface").IDraftBusiness;
    }>;
    getSingleBusinessWithSlug(slug: string, user: IUser): Promise<{
        data: import("./interfaces/business.interface").IBusiness;
    }>;
    getSingleBusinessWithSlugForAdmin(slug: string): Promise<{
        data: {
            business: import("./interfaces/business.interface").IBusiness;
            leads: import("../leads/interfaces/lead.interface").ILead[];
            vipUsers: IUser[];
        };
    }>;
    getInterestedListingsOfBusinessWithSlugForAdmin(slug: string, query: pagination, status: string, search: string): Promise<{
        data: import("../leads/interfaces/lead.interface").ILead[];
        results: number;
        totalCount: number;
    }>;
    deleteDraft(draftId: string): Promise<{
        data: import("./interfaces/draftbusiness.interface").IDraftBusiness;
    }>;
}
