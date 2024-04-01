import { pagination } from 'src/utils/utils.types';
import { CreateNewsLetterDto } from './dto/create-newsletter.dto';
import { NewslettersService } from './newsletters.service';
export declare class NewslettersController {
    private readonly newsLetterService;
    constructor(newsLetterService: NewslettersService);
    createNewsLetterQuery(createNewsLetterDto: CreateNewsLetterDto): Promise<{
        data: import("./interfaces/newsletter.interface").INewsLetter;
    }>;
    updateNewsLetterQueryStatus(id: string, status: string): Promise<import("./interfaces/newsletter.interface").INewsLetter>;
    deleteNewsLetterQuery(id: string): Promise<import("./interfaces/newsletter.interface").INewsLetter>;
    getNewsLetterQuery(query: pagination, status: string, type: string, search: string): Promise<{
        results: number;
        data: import("./interfaces/newsletter.interface").INewsLetter[];
        totalCount: number;
    }>;
}
