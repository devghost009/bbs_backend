import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { GroupsService } from './groups.service';
export declare class GroupsController {
    private readonly groupsService;
    constructor(groupsService: GroupsService);
    getAllGroups(query: pagination, search: string): Promise<{
        results: number;
        data: import("./interfaces/group.interface").IGroup[];
    }>;
    createGroup(name: string, users: string[], type: string, listings: string[], status: string[]): Promise<{
        data: import("./interfaces/group.interface").IGroup;
    }>;
    sendMessageToGroupUsers(user: IUser, templateId: string, groupId: string, cc: string[]): Promise<{
        data: void;
    }>;
    updateGroup(groupId: string, name: string, users: string[], type: string, listings: string[], status: string[]): Promise<{
        data: import("./interfaces/group.interface").IGroup;
    }>;
    deleteGroup(groupId: string): Promise<{
        data: import("./interfaces/group.interface").IGroup;
    }>;
}
