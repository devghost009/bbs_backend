import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { NotesDto } from './dto/create-lead.dto';
import { SendTemplateDto } from './dto/send-template.dto';
import { SignNdaDto } from './dto/sign-nda.dto';
import { LeadsService } from './leads.service';
export declare class LeadsController {
    private readonly leadsServices;
    constructor(leadsServices: LeadsService);
    getLeads(query: pagination, status: string, search: string, user: IUser): Promise<{
        lead: import("./interfaces/lead.interface").ILead[];
        countDoc: number;
        results: number;
    }>;
    getLeadsOnOwnedBusiness(query: pagination, user: IUser): Promise<{
        lead: import("./interfaces/lead.interface").ILead[];
        results: number;
    }>;
    createLead(businessId: string, user: IUser): Promise<import("./interfaces/lead.interface").ILead>;
    sendTemplatePdfToBuyer(sendTemplateDto: SendTemplateDto): Promise<{
        data: {
            template: string;
        };
    }>;
    signNda(signNdaDto: SignNdaDto, user: IUser): Promise<import("./interfaces/lead.interface").ILead>;
    updateNdaContract(leadId: string, status: string, user: IUser): Promise<import("./interfaces/lead.interface").ILead>;
    updateLeadStatus(user: IUser, leadId: string, status: string, leadProgress: string, memorandum: string): Promise<import("./interfaces/lead.interface").ILead>;
    updateNotes(notesDto: NotesDto): Promise<import("./interfaces/lead.interface").ILead>;
    adminGetAllLeads(query: pagination, status: string, search: string, outsideLead: string): Promise<{
        lead: import("./interfaces/lead.interface").ILead[];
        results: number;
        countDoc: number;
    }>;
    adminGetleadDetails(id: string): Promise<any>;
}
