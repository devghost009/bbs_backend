import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { CreateTemplateTaskDto } from './dto/create-template.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
export declare class TemplateTasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getAllTemplateTasksForAdmin(query: pagination): Promise<{
        data: import("./interfaces/task.interface").ITask[];
        results: number;
        totalCount: number;
    }>;
    createTemplateTask(user: IUser, createTemplateTaskDto: CreateTemplateTaskDto): Promise<{
        data: import("./interfaces/task.interface").ITask;
    }>;
    updateTaskTemplate(user: IUser, taskId: string, updateTaskDto: UpdateTaskDto): Promise<{
        data: import("./interfaces/task.interface").ITask;
    }>;
    deleteTemplateTask(user: IUser, templateId: string, taskId: string): Promise<import("./interfaces/task.interface").ITask>;
}
