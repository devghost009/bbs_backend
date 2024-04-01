import { NotificationsService } from './notifications.service';
import { IUser } from '../users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
export declare class NotificationsController {
    private readonly notificationService;
    constructor(notificationService: NotificationsService);
    getNotifications(query: pagination, user: IUser): Promise<{
        results: number;
        data: {
            notifications: import("./interfaces/notification.interface").INotification[];
            counts: number;
        };
    }>;
    seenNotifications(id: string, user: IUser): Promise<import("./interfaces/notification.interface").INotification>;
}
