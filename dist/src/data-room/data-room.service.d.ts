import { Model } from 'mongoose';
import { IUser } from 'src/users/interfaces/user.interface';
import { S3Storage } from 'src/utils/utils.s3';
import { pagination } from 'src/utils/utils.types';
import { AssignFolderPermissionDto } from './dto/assign-folder-permission.dto';
import { CreateFolderDto } from './dto/create-folder.dto';
import { RevokeDataRoomPermissionDto } from './dto/revoke-data-room-permission.dto';
import { UpdateFolderDto } from './dto/update-folder.dto';
import { IFolder } from './interfaces/folder.interface';
export declare class DataRoomService {
    private readonly Folder;
    private readonly User;
    private readonly s3Storage;
    constructor(Folder: Model<IFolder>, User: Model<IUser>, s3Storage: S3Storage);
    getDataRoom(user: IUser, child: string, currentFolderName: string, parent: string): Promise<{
        brokerFolders: IFolder[];
        companyFolders: IFolder[];
        listingFolders: IFolder[];
    }>;
    createProject(user: IUser, project: {
        roles: string[];
        parent?: string;
        business: string;
        owner?: string;
        name: string;
        isFile: boolean;
        isDeletable: boolean;
        isActive: boolean;
        fileName?: string;
        children?: string[];
        folders: {
            name: string;
            isDeletable: boolean;
            roles: string[];
        }[];
    }): Promise<IFolder>;
    createFolder(user: IUser, createFolderDto: CreateFolderDto, files: any): Promise<any>;
    updateFolder(user: IUser, folderId: string, updateFolderDto: UpdateFolderDto): Promise<IFolder>;
    deleteFolder(user: IUser, folderId: string): Promise<IFolder>;
    getChildFolder(payload: {
        parentFolderId: string;
        folderName: string;
    }): Promise<[Error, IFolder]>;
    createFoldersWithBuyerNames(params: {
        businessId: string;
        userIds: string[];
        role: string;
        parent: string;
    }): Promise<void>;
    assignFolderPermimssion(assignFolderPermission: AssignFolderPermissionDto): Promise<string[]>;
    revokeDataRoomPermimssion(revokeDataRoomPermissionDto: RevokeDataRoomPermissionDto): Promise<[Error, void]>;
    getFolders(query: pagination): Promise<IFolder[]>;
    updateFolderBrokers(params: {
        businessId: string;
        excludedBrokers: string[];
        newBrokers: string[];
    }): Promise<void>;
    updateFolderOwners(params: {
        businessId: string;
        prevOwner: string;
        newOwner: string;
    }): Promise<void>;
    addBuyersToLeavedUsers(payload: {
        businessId: string;
        allowedBuyers: string[];
    }): Promise<void>;
}
