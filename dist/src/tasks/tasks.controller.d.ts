import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { UpdateTaskDto } from './dto/update-task.dto';
import { TasksService } from './tasks.service';
import { IReqBodyToCreateSTask } from './interfaces/task.interface';
export declare class TasksController {
    private readonly tasksService;
    constructor(tasksService: TasksService);
    getAllTasks(user: IUser, query: pagination): Promise<{
        results: number;
        tasks: import("./interfaces/task.interface").ITask[];
    }>;
    getAllTasksForAdmin(query: pagination): Promise<{
        results: number;
        tasks: import("./interfaces/task.interface").ITask[];
    }>;
    updateTask(user: IUser, taskId: string, updateTaskDto: UpdateTaskDto): Promise<import("./interfaces/task.interface").ITask>;
    updateTaskActiveStatus(user: IUser, taskId: string): Promise<import("./interfaces/task.interface").ITask>;
    createComment(user: IUser, taskId: string, comment: string): Promise<import("./interfaces/task.interface").ITask>;
    updateComment(user: IUser, taskId: string, commentId: string, comment: string): Promise<import("./interfaces/task.interface").ITask>;
    deleteComment(user: IUser, taskId: string, commentId: string): Promise<import("./interfaces/task.interface").ITask>;
    sCreateTaskStatus(name: string): Promise<string | import("./interfaces/task.interface").ISTaskStatus>;
    sCreateTask(reqBody: IReqBodyToCreateSTask): Promise<string | import("./interfaces/task.interface").ISTask>;
    sGetAllTaskStatuses(): Promise<string | import("./interfaces/task.interface").ISTaskStatus[]>;
}
