import mongoose, { Model } from 'mongoose';
import { AppConfigsService } from 'src/app-configs/app-configs.service';
import { BusinessService } from 'src/business/business.service';
import { IBusiness } from 'src/business/interfaces/business.interface';
import { ChatsService } from 'src/chats/chats.service';
import { ILead } from 'src/leads/interfaces/lead.interface';
import { MailsService } from 'src/mails/mails.service';
import { EmailService } from 'src/utils/utils.email.service';
import { pagination } from 'src/utils/utils.types';
import { AdminUpdateUserDto } from './dto/admin-update-user.dto';
import { CreateBulkUserDTO, CreateSpecialUser } from './dto/create-specialUser.dto';
import { UpdateImapDto } from './dto/update-imap.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { IReqOfAssignRoles, IUser } from './interfaces/user.interface';
import { S3Storage } from 'src/utils/utils.s3';
import { SendgridService } from 'src/sendgrid/sendgrid.service';
import { Email } from 'src/sendgrid/sendgrid.schema';
import { CommunicationService } from 'src/communication/communication.service';
import { IRoom } from 'src/chats/interfaces/room.interface';
import { ISCall, ISSMS } from 'src/communication/communication.interfaces';
export declare class UsersService {
    private readonly User;
    private readonly Business;
    private readonly Lead;
    private readonly Room;
    private readonly Email;
    private readonly SCall;
    private readonly SSMS;
    private readonly businessService;
    private readonly mailsService;
    private readonly chatsService;
    private readonly emailService;
    private readonly appConfigService;
    private readonly sendgridService;
    private readonly s3Storage;
    private readonly communicationService;
    constructor(User: Model<IUser>, Business: Model<IBusiness>, Lead: Model<ILead>, Room: Model<IRoom>, Email: Model<Email>, SCall: Model<ISCall>, SSMS: Model<ISSMS>, businessService: BusinessService, mailsService: MailsService, chatsService: ChatsService, emailService: EmailService, appConfigService: AppConfigsService, sendgridService: SendgridService, s3Storage: S3Storage, communicationService: CommunicationService);
    myProfile(user: IUser): Promise<IUser>;
    getUserCities(): Promise<any>;
    getAllUsersForRoom(user: IUser, role: string, searchName: string): Promise<IUser[]>;
    addNotes(user: IUser, userId: string, updateUserDto: UpdateUserDto): Promise<IUser>;
    updateMe(updateUserDto: UpdateUserDto, _user: IUser): Promise<{
        user: IUser;
    }>;
    updateMailFields(updateImapDto: UpdateImapDto, user: IUser): Promise<IUser | string>;
    getAllAdmins(): Promise<IUser[]>;
    adminUpdateUser(userId: string, updateUserDto: AdminUpdateUserDto, files: any): Promise<IUser>;
    adminGetOwnerAndBrokers(userType: string): Promise<any>;
    adminCreateSpecialUser(createSpecialUser: CreateSpecialUser): Promise<IUser>;
    adminCreateBulkSpecialUser(user: IUser, createBulkUsers: CreateBulkUserDTO): Promise<IUser[]>;
    adminAddUserToVipList(users: string[], removeUser: string, businessId: string, user: IUser): Promise<IUser[]>;
    deactivateUser(active: boolean, userId: string): Promise<IUser>;
    getBuyersSellersUsers(query: pagination, status: string, search: string, designation?: string): Promise<{
        totalCount: number;
        results: number;
        data: IUser[];
    }>;
    getBrokers(query: pagination, search: string): Promise<{
        totalCount: number;
        results: number;
        data: IUser[];
    }>;
    getDetailsOfABroker(brokerId: string): Promise<{
        user: IUser;
        listings: IBusiness[];
    }>;
    getDetailsOfAUser(userId: string): Promise<IUser>;
    getListingsOfAUser(userId: string, query: pagination, user: IUser): Promise<{
        totalCount: number;
        ownedBusiness: IBusiness[];
    }>;
    getInterestedLeadsOfAUser(userId: string, query: pagination): Promise<{
        totalCount: number;
        leads: ILead[];
    }>;
    getListingsOfABroker(userId: string, query: pagination): Promise<{
        totalCount: number;
        ownedBusiness: IBusiness[];
    }>;
    getOutsideUsers(query: pagination, userType: string, search: string): Promise<{
        totalCount: number;
        results: number;
        data: IUser[];
    }>;
    getUsersAccToParams(params: {
        interest: boolean;
        city: string;
        subscribed: boolean;
        onlyBuyer: boolean;
        zipCode: number;
        search: string;
        statuses: string[];
        businessIds: string[];
    }): Promise<{
        users: IUser[];
        countDoc: number;
    }>;
    getBuyersFromBusinessInterests(businessIds: string[]): Promise<{
        users: IUser[];
        countDoc: number;
    }>;
    deleteUser(userId: string): Promise<IUser>;
    getUserEmails(userId: string): Promise<"Server occurred an unknown error." | (IUser & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    hasNotification(userId: string): Promise<boolean>;
    getAvailableMeetingInvitees(userId: string): Promise<"Server occurred an unknown error." | (IUser & {
        _id: mongoose.Types.ObjectId;
    })[]>;
    getTwillioNumbers(): Promise<any>;
    getMembersOfPlatforms(): Promise<any>;
    assignRoles(userId: string, reqData: IReqOfAssignRoles): Promise<any>;
    getRuntimeData(userId: string, user: IUser): Promise<any>;
}
