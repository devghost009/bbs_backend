import { ConfigService } from '@nestjs/config';
import * as nodemailer from 'nodemailer';
import { IUser } from 'src/users/interfaces/user.interface';
interface EmailUser {
    email: string;
    firstName?: string;
    name?: string;
    userName?: string;
}
export declare class EmailService {
    private readonly configService;
    private from;
    private baseUrl;
    private webUrl;
    constructor(configService: ConfigService);
    newTransport(): nodemailer.Transporter<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    outlookTransport(sender: IUser): nodemailer.Transporter<import("nodemailer/lib/smtp-transport").SentMessageInfo>;
    send(user: EmailUser, template: string, subject?: string, url?: string, payload?: any): Promise<void>;
    outlookSend(sender: IUser, email: string, template: string, subject?: string, url?: string, payload?: any): Promise<void>;
    sendOutlookMail(sender: IUser, email: any, payload: any): Promise<void>;
    sendUserPassword(user: EmailUser, payload: any): Promise<void>;
    sendNdaConfirmation(user: EmailUser, payload: any): Promise<void>;
    sendPasswordReset(user: EmailUser, payload: any): Promise<void>;
    businessUpdateStatus(user: EmailUser, payload: any): Promise<void>;
    ndaSignMail(user: EmailUser, payload: any): Promise<void>;
    promotionMail(user: EmailUser, payload: any): Promise<void>;
}
export {};
