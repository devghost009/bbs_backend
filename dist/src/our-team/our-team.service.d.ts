import { Model } from 'mongoose';
import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { IOurTeam } from './interfaces/our-team.interface';
export declare class OurTeamService {
    private readonly OurTeam;
    private readonly s3Storage;
    constructor(OurTeam: Model<IOurTeam>, s3Storage: S3Storage);
    create(payload: any, files: any): Promise<IOurTeam>;
    update(id: string, payload: any, files: any): Promise<IOurTeam>;
    findAll(query: pagination): Promise<{
        data: IOurTeam[];
        totalCount: number;
        results: number;
    }>;
    findAllForAdmin(query: pagination, status: string): Promise<{
        data: IOurTeam[];
        totalCount: number;
        results: number;
    }>;
    delete(id: string): Promise<IOurTeam>;
}
