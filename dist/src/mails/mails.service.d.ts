import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { AppConfigsService } from 'src/app-configs/app-configs.service';
import { Imap, IUser } from 'src/users/interfaces/user.interface';
import { EmailService } from 'src/utils/utils.email.service';
export declare class MailsService {
    private readonly User;
    private readonly emailService;
    private readonly configService;
    private readonly appConfigsService;
    constructor(User: Model<IUser>, emailService: EmailService, configService: ConfigService, appConfigsService: AppConfigsService);
    testCredentials(param: {
        user: string;
        password: string;
    }): Promise<[Error, any]>;
    getImapConfig(payload: {
        userId?: string;
        user?: IUser;
    }): Promise<Imap>;
    getAllMails(imapConfig: any, from: string, to: string, search?: string, mood?: string, options?: any): Promise<any>;
    readInboxMail(READ_MAIL_CONFIG: any, from: string, to: string, search?: string, mood?: string): Promise<any[]>;
    addToMailBox(READ_MAIL_CONFIG: any, uids: number[], box: string): Promise<unknown>;
    readInboxMailForCron(READ_MAIL_CONFIG: any): Promise<any>;
    sendMail(user: IUser, email: string, subject: string, message: string, cc: string[], files: any): Promise<any>;
    deleteMail(READ_MAIL_CONFIG: any, uids: number[] | number): Promise<void>;
}
