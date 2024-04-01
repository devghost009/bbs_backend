import { pagination } from 'src/utils/utils.types';
import { OurTeamService } from './our-team.service';
export declare class OurTeamController {
    private readonly ourTeamService;
    constructor(ourTeamService: OurTeamService);
    create(firstName: string, lastName: string, designation: string, email: string, officeContact: string, deskContact: string, contact: string, description: string, order: string, files: any): Promise<import("./interfaces/our-team.interface").IOurTeam>;
    update(id: string, firstName: string, lastName: string, designation: string, email: string, officeContact: string, deskContact: string, contact: string, description: string, order: string, files: any): Promise<import("./interfaces/our-team.interface").IOurTeam>;
    findAll(query: pagination): Promise<{
        data: import("./interfaces/our-team.interface").IOurTeam[];
        totalCount: number;
        results: number;
    }>;
    findAllForAdmin(query: pagination, status: string): Promise<{
        data: import("./interfaces/our-team.interface").IOurTeam[];
        totalCount: number;
        results: number;
    }>;
    remove(id: string): Promise<import("./interfaces/our-team.interface").IOurTeam>;
}
