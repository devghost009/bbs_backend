import { pagination } from 'src/utils/utils.types';
import { TaskTemplatesService } from './task-templates.service';
export declare class TaskTemplatesController {
    private readonly taskTemplatesService;
    constructor(taskTemplatesService: TaskTemplatesService);
    getAllTaskTemplate(query: pagination, search: string): Promise<{
        results: number;
        totalCount: number;
        templates: import("./interfaces/task-template.interface").ITaskTemplate[];
    }>;
    getSingleTemplate(slug: string): Promise<import("./interfaces/task-template.interface").ITaskTemplate>;
    createTemplateTask(name: string, tasks: string[]): Promise<import("./interfaces/task-template.interface").ITaskTemplate>;
    updateTemplateTask(slug: string, name: string): Promise<import("./interfaces/task-template.interface").ITaskTemplate>;
    deleteTemplate(templateId: string): Promise<import("./interfaces/task-template.interface").ITaskTemplate>;
}
