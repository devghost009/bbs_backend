import { Model } from 'mongoose';
import { pagination } from 'src/utils/utils.types';
import { ITaskTemplate } from './interfaces/task-template.interface';
import { ITask } from 'src/tasks/interfaces/task.interface';
export declare class TaskTemplatesService {
    private readonly TaskTemplate;
    private readonly Task;
    constructor(TaskTemplate: Model<ITaskTemplate>, Task: Model<ITask>);
    getAllTaskTemplate(query: pagination, search?: string): Promise<{
        results: number;
        totalCount: number;
        templates: ITaskTemplate[];
    }>;
    getSingleTemplate(slug: string): Promise<ITaskTemplate>;
    createTemplateTask(name: string, tasks?: string[]): Promise<ITaskTemplate>;
    updateTemplateTask(slug: string, name: string): Promise<ITaskTemplate>;
    deleteTemplate(templateId: string): Promise<ITaskTemplate>;
}
