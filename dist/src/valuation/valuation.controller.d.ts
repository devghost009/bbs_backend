import { pagination } from 'src/utils/utils.types';
import { ValuationService } from './valuation.service';
import { CreateValuationDto } from './dto/create-valuation.dto';
export declare class ValuationController {
    private readonly valuationService;
    constructor(valuationService: ValuationService);
    getAllValuations(query: pagination, status: string, search: string): Promise<{
        results: number;
        data: import("./interfaces/valuation.interface").IValuation[];
        totalCount: number;
    }>;
    getSpecificValuation(id: string): Promise<{
        data: import("./interfaces/valuation.interface").IValuation;
    }>;
    createValuation(createValuationDto: CreateValuationDto): Promise<{
        data: import("./interfaces/valuation.interface").IValuation;
    }>;
    updateValuation(valuationId: string, status: string): Promise<import("./interfaces/valuation.interface").IValuation>;
    deleteValuation(valuationId: string): Promise<import("./interfaces/valuation.interface").IValuation>;
}
