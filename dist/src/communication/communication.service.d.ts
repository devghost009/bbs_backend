/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose/types/inferschematype" />
import { Document, Model, Schema } from 'mongoose';
import { CreateContactDto } from 'src/users/dto/create-contact.dto';
import { ResetPasswordUserDto } from 'src/users/dto/resetPassword-user.dto';
import { IUser } from 'src/users/interfaces/user.interface';
import { Email } from 'src/sendgrid/sendgrid.schema';
import { ISCall, ISSMS } from './communication.interfaces';
export interface ContactItem extends Document {
    firstName: string;
    lastName: string;
    email: string;
    contact: string;
    role: string;
    passwordResetToken: string;
    passwordResetExpires: string;
}
export declare class CommunicationService {
    private readonly Contact;
    private readonly User;
    private readonly Email;
    private readonly SSMS;
    private readonly SCall;
    private client;
    constructor(Contact: Model<ContactItem>, User: Model<IUser>, Email: Model<Email>, SSMS: Model<ISSMS>, SCall: Model<ISCall>);
    sendSms(to: string, body: string): Promise<void>;
    makeCall(to: string): Promise<void>;
    getSmsHistory(): Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance[]>;
    getCallHistory(): Promise<import("twilio/lib/rest/api/v2010/account/call").CallInstance[]>;
    contactRegist(createContactDto: CreateContactDto): Promise<any>;
    resetPassword(resetPasswordUserDto: ResetPasswordUserDto): Promise<{
        result: boolean;
        user: ContactItem & {
            _id: import("mongoose").Types.ObjectId;
        };
        password: string;
        token: string;
    }>;
    contactGain(): Promise<(ContactItem & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    resetNotification(): Promise<import("mongodb").UpdateResult>;
    clearReadUserIds(from: string): Promise<ContactItem & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    readConversation(contactId: string, userId: string): Promise<ContactItem & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getAContacts(): Promise<any[]>;
    getSContacts(user: IUser): Promise<any>;
    getSConversations(user: IUser, contactId: string): Promise<any>;
    sSendSms(from: string, to: string, body: string): Promise<any>;
    sMakeCall(from: string, to: string): Promise<any>;
    sMarkReadConversation(contactId: Schema.Types.ObjectId, userId: Schema.Types.ObjectId): Promise<any>;
    extractSid(to: string): Promise<string>;
    audioLink(to: string): Promise<string>;
}
