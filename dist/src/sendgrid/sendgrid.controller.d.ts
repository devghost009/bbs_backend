import { SendgridService } from './sendgrid.service';
import { CommunicationService } from '../communication/communication.service';
import { Email } from './sendgrid.schema';
export declare class SendgridController {
    private readonly mailsService;
    private readonly communicationService;
    constructor(mailsService: SendgridService, communicationService: CommunicationService);
    sendEmail(to: string, from: string, subject: string, text: string): Promise<Email | string>;
    receiveEmail(email: any): Promise<void>;
    getEmailHistory(): Promise<Email[]>;
    markEmailAsRead(emailId: string): Promise<Email>;
    sSendEmail(to: string, from: string, subject: string, text: string): Promise<Email | string>;
}
