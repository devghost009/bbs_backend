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
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';
import { Email } from './sendgrid.schema';
import { ContactItem } from 'src/communication/communication.service';
import { IUser } from 'src/users/interfaces/user.interface';
export declare class SendgridService {
    private readonly configService;
    private emailModel;
    private readonly Contact;
    private readonly User;
    private baseUrl;
    private webUrl;
    constructor(configService: ConfigService, emailModel: Model<Email>, Contact: Model<ContactItem>, User: Model<IUser>);
    sendEmail(to: string, from: string, subject: string, text: string): Promise<Email | string>;
    saveIncomingEmail(to: string, from: string, subject: string, text: string): Promise<Email>;
    getEmailHistory(): Promise<Email[]>;
    markEmailAsRead(emailId: string): Promise<Email>;
    sendPasswordSetupEmail(to: string, passwordSetupLink: string): Promise<Email | string>;
    resetNotification(): Promise<import("mongodb").UpdateResult>;
    clearReadUserIds(from: string): Promise<ContactItem & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    createSender(user: IUser, email: string, nickname: string): Promise<any>;
    sSendEmail(to: string, from: string, subject: string, text: string): Promise<any>;
}
