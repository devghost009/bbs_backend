import { Model } from 'mongoose';
import { ILead } from 'src/leads/interfaces/lead.interface';
import { TemplatesService } from 'src/templates/templates.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { IGroup } from './interfaces/group.interface';
export declare class GroupsService {
    private readonly Group;
    private readonly Lead;
    private readonly templatesService;
    constructor(Group: Model<IGroup>, Lead: Model<ILead>, templatesService: TemplatesService);
    getAllGroups(query: pagination, search: string): Promise<{
        results: number;
        data: IGroup[];
    }>;
    createGroup(name: string, users: string[], type: string, listings: string[], status: string[]): Promise<IGroup>;
    updateGroup(groupId: string, name: string, users: string[], type: string, listings?: string[], status?: string[]): Promise<IGroup>;
    deleteGroup(groupId: string): Promise<IGroup>;
    sendMessageToGroupUsers(templateId: string, groupId: string, cc: string[], user: IUser): Promise<void>;
}
