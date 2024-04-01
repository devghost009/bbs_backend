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
import { Request, Response } from 'express';
import { CreateContactDto } from 'src/users/dto/create-contact.dto';
import { CommunicationService } from './communication.service';
import { SendgridService } from 'src/sendgrid/sendgrid.service';
import { ConfigService } from '@nestjs/config';
import { ResetPasswordUserDto } from 'src/users/dto/resetPassword-user.dto';
import { AuthService } from 'src/auth/auth.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { Schema } from 'mongoose';
export declare class CommunicationController {
    private communicationService;
    private readonly sendGridService;
    private readonly configService;
    private readonly authService;
    private sharedVariable;
    private client;
    constructor(communicationService: CommunicationService, sendGridService: SendgridService, configService: ConfigService, authService: AuthService);
    sendSms(to: string, body: string): Promise<string>;
    contactRegist(createContactDto: CreateContactDto, req: Request): Promise<{
        status: string;
        result: any;
    }>;
    resetPassword(resetPasswordUserDto: ResetPasswordUserDto, token: string, res: Response): Promise<void>;
    receiveSms(from: string, body: string): Promise<import("./communication.service").ContactItem & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getToken(identity: string): string;
    transferCall(first: string, second: string): Promise<void>;
    recordCall(to: string): Promise<void>;
    linkRecord(to: string): Promise<string>;
    hangupCall(to: string): Promise<string>;
    holdCall(to: string, res: Response): Promise<void>;
    unholdCall(to: string, res: Response): Promise<void>;
    conferenceCall(participants: string, initiate: string, res: Response): Promise<void>;
    conferenceHangup(participant: string[]): Promise<void>;
    conferenceHold(participant: string[]): Promise<void>;
    conferenceUnhold(participant: string[]): Promise<void>;
    forwardCall(num: string): Promise<void>;
    handleRecordingStatus(body: any, res: Response): void;
    getVoice(number: string, res: Response): void;
    voiceIncoming(From: string, res: Response): Promise<void>;
    callStatus(body: any): void;
    handleCall(from: string): any;
    contactGain(): Promise<(import("./communication.service").ContactItem & {
        _id: import("mongoose").Types.ObjectId;
    })[]>;
    getSmsHistory(): Promise<import("twilio/lib/rest/api/v2010/account/message").MessageInstance[]>;
    getCallHistory(): Promise<import("twilio/lib/rest/api/v2010/account/call").CallInstance[]>;
    readConversation(contactId: string, userId: string): Promise<import("./communication.service").ContactItem & {
        _id: import("mongoose").Types.ObjectId;
    }>;
    getSContacts(user: IUser): Promise<any>;
    getSConversations(user: IUser, contactId: string): Promise<any>;
    sSendSms(from: string, to: string, body: string): Promise<any>;
    sMakeCall(from: string, to: string): Promise<any>;
    sMarkRead(contactId: Schema.Types.ObjectId, userId: Schema.Types.ObjectId): Promise<any>;
}
