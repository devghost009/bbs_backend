import { Model } from 'mongoose';
import { Server, Socket } from 'socket.io';
import { ChatsService } from 'src/chats/chats.service';
import { IChat } from 'src/chats/interfaces/chat.interface';
import { IRoom } from 'src/chats/interfaces/room.interface';
import { NotificationsService } from 'src/notifications/notifications.service';
import { IUser } from 'src/users/interfaces/user.interface';
export declare class SocketsGateway {
    private readonly User;
    private readonly Room;
    private readonly Chat;
    private readonly chatsService;
    private readonly notificationService;
    server: Server;
    constructor(User: Model<IUser>, Room: Model<IRoom>, Chat: Model<IChat>, chatsService: ChatsService, notificationService: NotificationsService);
    afterInit(server: Server): void;
    handleMessage(client: Socket, payload: {
        id: string;
    }): Promise<void>;
    handleDisconnect(client: Socket): Promise<void>;
    markAsRead(client: Socket, payload: {
        roomId: string;
        userId: string;
    }): Promise<void>;
    chatJoin(client: Socket, payload: {
        roomId: string;
        userId: string;
    }): Promise<void>;
    handleMessages(client: Socket, payload: {
        message: object;
        from: string;
        roomId: string;
    }): Promise<void>;
}
