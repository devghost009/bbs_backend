import { IUser } from 'src/users/interfaces/user.interface';
import { S3Storage } from 'src/utils/utils.s3';
import { DataRoomService } from './data-room.service';
import { AssignFolderPermissionDto } from './dto/assign-folder-permission.dto';
import { CreateFolderDto } from './dto/create-folder.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
export declare class DataRoomController {
    private readonly dataRoomService;
    private readonly s3Storage;
    constructor(dataRoomService: DataRoomService, s3Storage: S3Storage);
    assignFolderPermimssion(user: IUser, sssignFolderPermission: AssignFolderPermissionDto): Promise<{
        data: string[];
    }>;
    getDataRoom(user: IUser, child: string, currentFolderName: string, parent: string): Promise<{
        data: {
            brokerFolders: import("./interfaces/folder.interface").IFolder[];
            companyFolders: import("./interfaces/folder.interface").IFolder[];
            listingFolders: import("./interfaces/folder.interface").IFolder[];
        };
    }>;
    createFolder(createFolderDto: CreateFolderDto, user: IUser, files: any): Promise<{
        data: any;
    }>;
    updateFolder(user: IUser, updateFolderDto: UpdateFolderDto, folderId: string): Promise<import("./interfaces/folder.interface").IFolder>;
    deleteFolder(user: IUser, folderId: string): Promise<{
        data: import("./interfaces/folder.interface").IFolder;
    }>;
}
