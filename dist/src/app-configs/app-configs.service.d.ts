import { Model } from 'mongoose';
import { UpdateContactInfo } from './dto/contact-info.dto';
import { IAppConfig } from './interfaces/appConfig.interface';
export declare class AppConfigsService {
    private readonly AppConfigs;
    constructor(AppConfigs: Model<IAppConfig>);
    getAppDetails(): Promise<IAppConfig[]>;
    appConfigDetails(key: any): Promise<any>;
    updateContactInfo(updateContactInfo: UpdateContactInfo): Promise<IAppConfig>;
}
