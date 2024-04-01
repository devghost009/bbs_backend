import { Model } from 'mongoose';
import { IBusiness } from 'src/business/interfaces/business.interface';
import { pagination } from 'src/utils/utils.types';
import { ICategory } from './interfaces/category.interface';
export declare class CategoriesService {
    private readonly Category;
    private readonly Business;
    constructor(Category: Model<ICategory>, Business: Model<IBusiness>);
    getCategories(query: pagination): Promise<ICategory[]>;
    getSingleCategory(categoryId: string): Promise<ICategory>;
    createCategory(name: string): Promise<ICategory>;
    updateCatgeory(id: string, name: string, isActive: boolean): Promise<ICategory>;
    deleteCategory(id: string): Promise<ICategory>;
    getCategoryAdmin(query: pagination): Promise<{
        results: number;
        totalCount: number;
        data: ICategory[];
    }>;
}
