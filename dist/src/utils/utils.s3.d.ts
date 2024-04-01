/// <reference types="node" />
/// <reference types="multer" />
/// <reference types="node" />
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';
export declare class S3Storage {
    private readonly configService;
    constructor(configService: ConfigService);
    private imageBucket;
    private pdfBucket;
    private videoBucket;
    private region;
    private accessKeyId;
    private secretAccessKey;
    private s3;
    private objectOfUploadedFiles;
    getFileStream(params: {
        Bucket: string;
        Key: string;
    }): import("stream").Readable;
    copyFile(params: {
        Bucket: string;
        sourceFolder: string;
        fileName: string;
        destFolder: string;
    }): Promise<import("aws-sdk/lib/request").PromiseResult<S3.CopyObjectOutput, import("aws-sdk").AWSError>>;
    moveFile(params: {
        Bucket: string;
        sourceFolder: string;
        destFolder: string;
    }): Promise<{
        files: S3.ObjectList;
        folders: string[];
    }>;
    getFoldersList(params: {
        Bucket: string;
        folderName: string;
    }): Promise<{
        files: S3.ObjectList;
        folders: string[];
    }>;
    createProjectFolder(params: {
        Bucket: string;
        folderName: string;
        roles?: string[];
    }): Promise<{
        files: S3.ObjectList;
        folders: string[];
    }>;
    getUploadingSignedURL(Key: any, Expires?: number): Promise<string>;
    deleteImage(fileKey: any): Promise<any>;
    deleteFile(payload: {
        directory: string;
        bucket: string;
    }): Promise<any>;
    deleteDirectory(payload: {
        directory: string;
        bucket: string;
    }): Promise<{
        files: S3.ObjectList;
        folders: string[];
    }>;
    getPDFFileStream(fileKey: any): Promise<any>;
    uploadFiles(files: Array<Express.Multer.File>): Promise<any>;
    uploadPdf(body: Buffer): Promise<string>;
    uploadWord(body: Buffer): Promise<string>;
    uploadBase64Files(fileKey: any): Promise<string[]>;
}
