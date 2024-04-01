import { Model } from 'mongoose';
import { TaskTemplatesService } from 'src/task-templates/task-templates.service';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { UpdateTaskDto } from 'src/tasks/dto/update-task.dto';
import { ITask } from 'src/tasks/interfaces/task.interface';
import { TasksService } from 'src/tasks/tasks.service';
import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { CreateProjectStageDto, UpdateProjectStageDto } from './dto/add-project-stag.dto';
import { applyTaskDto } from './dto/apply-task.dto';
import { CreateProjectDto } from './dto/create-project.dto';
import { SwitchTaskDto } from './dto/switch-task.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { IProject, Stage } from './interfaces/project.interface';
import { IBusiness } from '../business/interfaces/business.interface';
import { NotificationsService } from 'src/notifications/notifications.service';
import { IReqBodyToCreateProject, ISProject } from './interfaces/sProject.interface';
export declare class ProjectsService {
    private readonly Project;
    private readonly SProject;
    private readonly Business;
    private readonly tasksService;
    private readonly notificationService;
    private readonly taskTemplatesService;
    constructor(Project: Model<IProject>, SProject: Model<ISProject>, Business: Model<IBusiness>, tasksService: TasksService, notificationService: NotificationsService, taskTemplatesService: TaskTemplatesService);
    addStag(user: IUser, stagDTO: CreateProjectStageDto): Promise<IProject>;
    updateStag(user: IUser, updateStagDTO: UpdateProjectStageDto): Promise<IProject>;
    deleteStag(projectId: string, stage: string): Promise<IProject>;
    getSingleProject(slug: string): Promise<IProject | string>;
    getBusinessWithoutProjects(user: IUser): Promise<IBusiness[]>;
    getProjects(query: pagination, user: IUser, search?: string): Promise<{
        totalCount: number;
        project: IProject[];
    }>;
    getStages(user: IUser): Array<Stage>;
    addProject(user: IUser, createProject: CreateProjectDto): Promise<IProject>;
    updateProject(slug: string, updateProject: UpdateProjectDto): Promise<IProject>;
    deleteProject(slug: string): Promise<IProject>;
    addTask(user: IUser, stageId: string, addTask: CreateTaskDto): Promise<IProject>;
    updateTask(user: IUser, taskId: string, updateTask: UpdateTaskDto): Promise<ITask>;
    deleteTask(payload: {
        user: IUser;
        projectId: string;
        stageId: string;
        taskId: string;
    }): Promise<ITask>;
    switchTask(user: IUser, payload: SwitchTaskDto): Promise<IProject>;
    applyTemplateToProject(payload: {
        user: IUser;
        applyTask: applyTaskDto;
    }): Promise<IProject>;
    sCreateProject(reqBody: IReqBodyToCreateProject): Promise<ISProject | string>;
    sGetAllProjects(): Promise<Array<ISProject> | string>;
}
