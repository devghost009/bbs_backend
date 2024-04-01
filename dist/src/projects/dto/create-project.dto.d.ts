import { Stage } from '../interfaces/project.interface';
export declare class CreateProjectDto {
    business: string;
    creator: string;
    name: string;
    assignTo: string;
    stages: Stage[];
}
