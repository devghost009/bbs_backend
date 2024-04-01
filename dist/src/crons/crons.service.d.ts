import { Model } from 'mongoose';
import { IBusiness } from 'src/business/interfaces/business.interface';
import { ILead } from 'src/leads/interfaces/lead.interface';
import { MailsService } from 'src/mails/mails.service';
export declare class CronService {
    private readonly Business;
    private readonly Lead;
    private readonly mailsService;
    constructor(Business: Model<IBusiness>, Lead: Model<ILead>, mailsService: MailsService);
    runEveryMidnight(): Promise<void>;
}
