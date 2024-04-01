import { ConfigService } from '@nestjs/config';
export declare class NylasService {
    private readonly configService;
    private nylas;
    constructor(configService: ConfigService);
    getConnectedAccounts(): Promise<any>;
    viewLabelsAndFolders(): Promise<{
        account: any;
        accountLabels: any;
        accountFolders: any;
    }>;
    moveMostRecentThreadToFolder(folder: any): Promise<void>;
    createFolder(folderName: string): Promise<any>;
    getMostRecentMessage(): Promise<{
        data: any;
    }>;
    getAllMessages(): Promise<{
        data: any;
    }>;
    getThreads(limit: number): Promise<{
        data: any;
    }>;
    createDraft(subject: string, body: string, to: any): Promise<{
        data: any;
    }>;
}
