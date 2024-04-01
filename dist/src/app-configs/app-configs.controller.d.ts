import { AppConfigsService } from './app-configs.service';
import { UpdateContactInfo } from './dto/contact-info.dto';
import { UpdateAppConfigDto } from './dto/update-appConfig.dto';
export declare class AppConfigsController {
    private readonly appConfigsService;
    constructor(appConfigsService: AppConfigsService);
    getAppConfigs(): Promise<{
        results: number;
        data: import("./interfaces/appConfig.interface").IAppConfig[];
    }>;
    appConfigDetails(updateAppConfigDto: UpdateAppConfigDto): Promise<{
        data: any;
    }>;
    updateContactInfo(updateContactInfo: UpdateContactInfo): Promise<import("./interfaces/appConfig.interface").IAppConfig>;
}
