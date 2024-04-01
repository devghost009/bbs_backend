import { MailsService } from './mails.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { S3Storage } from 'src/utils/utils.s3';
export declare class MailsController {
    private readonly mailsService;
    private readonly s3Storage;
    constructor(mailsService: MailsService, s3Storage: S3Storage);
    fetchMails(search: string, from: string, to: string, mood: string, user: IUser): Promise<{
        data: any[];
    }>;
    sendMail(user: IUser, email: string, subject: string, message: string, cc: string[], files: any): Promise<any>;
    deleteMail(uids: number[] | number, user: IUser): Promise<void>;
    addToMailBox(uids: number[], box: string, user: IUser): Promise<unknown>;
}
