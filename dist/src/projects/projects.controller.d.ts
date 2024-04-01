import { ProjectsService } from './projects.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { SwitchTaskDto } from './dto/switch-task.dto';
import { pagination } from 'src/utils/utils.types';
import { IUser } from 'src/users/interfaces/user.interface';
import { CreateTaskDto } from 'src/tasks/dto/create-task.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { applyTaskDto } from './dto/apply-task.dto';
import { CreateProjectStageDto, UpdateProjectStageDto } from './dto/add-project-stag.dto';
import { UpdateTaskDto } from 'src/tasks/dto/update-task.dto';
import { IReqBodyToCreateProject } from './interfaces/sProject.interface';
export declare class ProjectsController {
    private readonly Projectservice;
    constructor(Projectservice: ProjectsService);
    getBusinessWithoutProjects(user: IUser): Promise<{
        data: import("../business/interfaces/business.interface").IBusiness[];
    }>;
    addStag(user: IUser, addStag: CreateProjectStageDto): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    updateStag(user: IUser, updateStagDTO: UpdateProjectStageDto): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    deleteStag(projectId: string, stageId: string): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    addTask(user: IUser, addTask: CreateTaskDto, stageId: string): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    updateTask(user: IUser, id: string, updateTask: UpdateTaskDto): Promise<{
        data: import("../tasks/interfaces/task.interface").ITask;
    }>;
    applyTemplateToTheProject(user: IUser, applyTask: applyTaskDto): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    deleteTask(user: IUser, projectId: string, stageId: string, taskId: string): Promise<{
        data: import("../tasks/interfaces/task.interface").ITask;
    }>;
    switchTask(user: IUser, switchTask: SwitchTaskDto): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    getProjects(user: IUser, query: pagination, search: string): Promise<{
        data: {
            totalCount: number;
            project: import("./interfaces/project.interface").IProject[];
            results: number;
        };
    }>;
    getSingleProject(slug: string): Promise<{
        data: string | import("./interfaces/project.interface").IProject;
    }>;
    addProject(user: IUser, createProject: CreateProjectDto): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    updateProject(slug: string, updateProject: UpdateProjectDto): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    DeleteProject(slug: string): Promise<{
        data: import("./interfaces/project.interface").IProject;
    }>;
    sCreateProject(reqBody: IReqBodyToCreateProject): Promise<string | import("./interfaces/sProject.interface").ISProject>;
    sGetAllProjects(): Promise<string | import("./interfaces/sProject.interface").ISProject[]>;
}
