import { Model, Types } from 'mongoose';
import { CalendarService } from 'src/calendars/calendar.service';
import { ITaskTemplate } from 'src/task-templates/interfaces/task-template.interface';
import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { CreateTaskDto } from './dto/create-task.dto';
import { CreateTemplateTaskDto } from './dto/create-template.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { IReqBodyToCreateSTask, ISTask, ISTaskStatus, ITask, Task } from './interfaces/task.interface';
export declare class TasksService {
    private readonly Task;
    private readonly STask;
    private readonly TaskTemplate;
    private readonly STaskStatus;
    private readonly calendarService;
    constructor(Task: Model<ITask>, STask: Model<ISTask>, TaskTemplate: Model<ITaskTemplate>, STaskStatus: Model<ISTaskStatus>, calendarService: CalendarService);
    getAllTasks(user: IUser, query: pagination, type?: string | any): Promise<{
        results: number;
        tasks: ITask[];
    }>;
    getSingleTask(taskId: string): Promise<[Error, ITask]>;
    createTask(user: IUser, createTaskDto: CreateTaskDto): Promise<ITask>;
    registerTaskToEvent(user: IUser, task: CreateTaskDto & {
        _id: Types.ObjectId;
    }): Promise<any>;
    insertManyTasks(user: IUser, project: string, tasks: Task[]): Promise<{
        ids: string[];
        tasks: ITask[];
    }>;
    updateTask(user: IUser, taskId: string, updateTaskDto: UpdateTaskDto, isFromAdmin?: boolean): Promise<ITask>;
    updateTaskActiveStatus(user: IUser, taskId: string): Promise<ITask>;
    deleteTask(user: IUser, taskId: string): Promise<ITask>;
    deleteProjectTasks(projectId: string): Promise<void>;
    deleteProjectStageTasksByIds(taskIds: string[]): Promise<void>;
    createComment(user: IUser, taskId: string, comment: string): Promise<ITask>;
    updateComment(user: IUser, taskId: string, commentId: string, comment: string): Promise<ITask>;
    deleteComment(user: IUser, taskId: string, commentId: string): Promise<ITask>;
    getAllTasksForAdmin(query: pagination): Promise<{
        results: number;
        tasks: ITask[];
    }>;
    getAllTemplateTasksForAdmin(query: pagination): Promise<{
        tasks: ITask[];
        totalCount: number;
    }>;
    createTemplateTask(user: IUser, createTemplateTaskDto: CreateTemplateTaskDto): Promise<ITask>;
    updateTemplateTask(user: IUser, taskId: string, updateTaskDto: UpdateTaskDto): Promise<ITask>;
    deleteTemplateTask(user: IUser, templateId: string, taskId: string): Promise<ITask>;
    sCreateTaskStatus(name: string): Promise<ISTaskStatus | string>;
    sCreateTask(reqBody: IReqBodyToCreateSTask): Promise<ISTask | string>;
    sGetAllTaskStatuses(): Promise<Array<ISTaskStatus> | string>;
}
