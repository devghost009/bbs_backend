import { pagination } from 'src/utils/utils.types';
import { CategoriesService } from './categories.service';
export declare class CategoriesController {
    private readonly categoryService;
    constructor(categoryService: CategoriesService);
    getCategories(query: pagination): Promise<{
        results: number;
        data: import("./interfaces/category.interface").ICategory[];
    }>;
    getSingleCategory(categoryId: string): Promise<{
        results: import("./interfaces/category.interface").ICategory;
    }>;
    createCategory(name: string): Promise<import("./interfaces/category.interface").ICategory>;
    updateCatgeory(name: string, isActive: boolean, id: string): Promise<import("./interfaces/category.interface").ICategory>;
    deleteCategory(id: string): Promise<import("./interfaces/category.interface").ICategory>;
    getCategoryAdmin(query: pagination): Promise<{
        results: number;
        totalCount: number;
        data: import("./interfaces/category.interface").ICategory[];
    }>;
}
