import { pagination } from 'src/utils/utils.types';
import { CoreValuesService } from './core-values.service';
export declare class CoreValuesController {
    private readonly coreValuesService;
    constructor(coreValuesService: CoreValuesService);
    getAllCoreValues(query: pagination): Promise<{
        data: import("./interfaces/core-values.interface").ICoreValues[];
        totalCount: number;
        results: number;
    }>;
    createCoreValues(title: string, description: string, order: number): Promise<import("./interfaces/core-values.interface").ICoreValues>;
    updateCoreValues(title: string, description: string, order: number, id: string): Promise<import("./interfaces/core-values.interface").ICoreValues>;
    deleteCoreValues(id: string): Promise<import("./interfaces/core-values.interface").ICoreValues>;
    getCoreValuesForAdmin(query: pagination): Promise<{
        data: import("./interfaces/core-values.interface").ICoreValues[];
        totalCount: number;
        results: number;
    }>;
}
