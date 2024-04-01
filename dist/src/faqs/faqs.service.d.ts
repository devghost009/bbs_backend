import { Model } from 'mongoose';
import { pagination } from 'src/utils/utils.types';
import { IFaqs } from './interfaces/faq.interface';
export declare class FaqsService {
    private readonly Faq;
    constructor(Faq: Model<IFaqs>);
    getAllActiveFaqs(query: pagination): Promise<IFaqs[]>;
    createFaq(question: string, answer: string, type: string, order: number): Promise<IFaqs>;
    updateFaq(id: string, question: string, answer: string, type: string, order: number, isActive: boolean): Promise<IFaqs>;
    deleteFaq(id: string): Promise<IFaqs>;
    getFaqsAdmin(query: pagination): Promise<{
        data: IFaqs[];
        totalCount: number;
        results: number;
    }>;
}
