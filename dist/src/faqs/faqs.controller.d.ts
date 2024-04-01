import { pagination } from 'src/utils/utils.types';
import { FaqsService } from './faqs.service';
export declare class FaqsController {
    private readonly faqService;
    constructor(faqService: FaqsService);
    getFaqs(query: pagination): Promise<{
        results: number;
        data: import("./interfaces/faq.interface").IFaqs[];
    }>;
    createFaqs(question: string, answer: string, type: string, order: number): Promise<import("./interfaces/faq.interface").IFaqs>;
    updateFaq(question: string, answer: string, type: string, order: number, isActive: boolean, id: string): Promise<import("./interfaces/faq.interface").IFaqs>;
    deleteFaq(id: string): Promise<import("./interfaces/faq.interface").IFaqs>;
    getFaqsAdmin(query: pagination): Promise<{
        data: import("./interfaces/faq.interface").IFaqs[];
        totalCount: number;
        results: number;
    }>;
}
