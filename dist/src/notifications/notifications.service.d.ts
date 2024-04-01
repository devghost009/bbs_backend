import { Model } from 'mongoose';
import { pagination } from 'src/utils/utils.types';
import { INotification } from './interfaces/notification.interface';
import { ConfigService } from '@nestjs/config';
import { IUser } from 'src/users/interfaces/user.interface';
import { SocketsGateway } from 'src/sockets/sockets.gateway';
type receiverUser = {
    pushNotifications: boolean;
    inAppNotifications: boolean;
};
type notification = {
    senderMode: string;
    receiver: string;
    receiverUser: receiverUser;
    title: string;
    message: string;
    fcmToken: string[];
    socket: string[];
    payload?: object;
    sender?: string;
    flag?: string;
};
export declare class NotificationsService {
    private readonly Notification;
    private readonly socket;
    private readonly configService;
    constructor(Notification: Model<INotification>, socket: SocketsGateway, configService: ConfigService);
    getNotifications(user: IUser, query: pagination): Promise<{
        notifications: INotification[];
        counts: number;
    }>;
    seenNotifications(user: IUser, notificationId: string): Promise<INotification>;
    createNotification(notification: notification): Promise<void>;
    sendPushNotification(notification: notification): Promise<void>;
}
export {};
