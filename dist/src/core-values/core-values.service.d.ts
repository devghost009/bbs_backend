import { Model } from 'mongoose';
import { pagination } from 'src/utils/utils.types';
import { ICoreValues } from './interfaces/core-values.interface';
export declare class CoreValuesService {
    private readonly CoreValues;
    constructor(CoreValues: Model<ICoreValues>);
    getAllCoreValues(query: pagination): Promise<{
        data: ICoreValues[];
        totalCount: number;
        results: number;
    }>;
    createCoreValues(title: string, description: string, order: number): Promise<ICoreValues>;
    updateCoreValues(id: string, title: string, description: string, order: number): Promise<ICoreValues>;
    deleteCoreValues(id: string): Promise<ICoreValues>;
    getCoreValuesForAdmin(query: pagination): Promise<{
        data: ICoreValues[];
        totalCount: number;
        results: number;
    }>;
}
