import { Model } from 'mongoose';
import { pagination } from 'src/utils/utils.types';
import { CreateNewsLetterDto } from './dto/create-newsletter.dto';
import { INewsLetter } from './interfaces/newsletter.interface';
export declare class NewslettersService {
    private readonly NewsLetter;
    constructor(NewsLetter: Model<INewsLetter>);
    createNewsLetterQuery(createNewsLetterDto: CreateNewsLetterDto): Promise<INewsLetter>;
    updateNewsLetterQueryStatus(id: string, status: string): Promise<INewsLetter>;
    deleteNewsLetterQuery(id: string): Promise<INewsLetter>;
    getNewsLetterQuery(query: pagination, status: string, type: string, search: string): Promise<{
        data: INewsLetter[];
        totalCount: number;
    }>;
}
