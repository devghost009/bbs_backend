import { Model } from 'mongoose';
import { pagination } from 'src/utils/utils.types';
import { CreateValuationDto } from './dto/create-valuation.dto';
import { IValuation } from './interfaces/valuation.interface';
export declare class ValuationService {
    private readonly Valuation;
    constructor(Valuation: Model<IValuation>);
    createValuation(createValuationDto: CreateValuationDto): Promise<IValuation>;
    getAllValuations(query: pagination, status: string, search: string): Promise<{
        data: IValuation[];
        totalCount: number;
    }>;
    getSpecificValuation(id: string): Promise<{
        data: IValuation;
    }>;
    updateValuation(valuationId: string, status: string): Promise<IValuation>;
    deleteValuation(valuationId: string): Promise<IValuation>;
}
