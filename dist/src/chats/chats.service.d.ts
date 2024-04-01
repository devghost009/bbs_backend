import { Model } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';
import { NotificationsService } from 'src/notifications/notifications.service';
import { SocketsGateway } from 'src/sockets/sockets.gateway';
import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { IChat, IReqOfSSendMessage, to } from './interfaces/chat.interface';
import { IRoom, users } from './interfaces/room.interface';
export declare class ChatsService {
    private readonly User;
    private readonly Room;
    private readonly Chat;
    private readonly socket;
    private readonly notificationService;
    private readonly authService;
    constructor(User: Model<IUser>, Room: Model<IRoom>, Chat: Model<IChat>, socket: SocketsGateway, notificationService: NotificationsService, authService: AuthService);
    getReceiverIds(roomUsers: users[], userId: string): IUser[];
    updateUnreadCount(roomUsers: users[], userId: string, userTo: IUser[]): {
        users: users[];
        to: to[];
    };
    startChatForDummyUser(payload: {
        firstName: string;
        message: string;
    }): Promise<any>;
    updateUsers(params: {
        businessId: string;
        oldBrokers: string[];
        excludedBrokers: string[];
        newBrokers: string[];
    }): Promise<void>;
    sendMessage(payload: {
        roomId: string;
        senderId: string;
        message: object;
        to: object[];
        users: object[];
    }): Promise<{
        room: IRoom;
        chat: IChat;
    }>;
    getGuestChats(user: IUser, query: pagination, search?: string): Promise<{
        data: IRoom[];
        totalCount: number;
    }>;
    getGuestRoomMessages(roomId: string): Promise<{
        chat: IChat[];
        totalCount: number;
    }>;
    replyToGuestChat(user: IUser, roomId: string, message: string): Promise<IRoom>;
    getRooms(user: IUser, query: pagination, type: string, search: string): Promise<{
        data: IRoom[];
        totalCount: number;
    }>;
    getRoom(roomId: string): Promise<IRoom>;
    chatMessages(user: IUser, room: string, query: pagination): Promise<{
        data: IChat[];
        totalCount: number;
    }>;
    createRoom(payload: {
        reference: string;
        userIds: string[];
        business?: string;
        title?: string;
        leadId?: string;
    }): Promise<IRoom>;
    joinRoom(user: IUser, roomId: string): Promise<IRoom>;
    startChat(payload: {
        reference: string;
        userIds: string[];
        message: string;
        business?: string;
        leadId?: string;
    }, user: IUser): Promise<IRoom>;
    addUserToGroups(user: IUser): Promise<void>;
    leaveRoom(user: IUser, roomId: string): Promise<[Error, IRoom]>;
    endRoom(roomId: string): Promise<IRoom>;
    endChatRooms(payload: {
        business: string;
        leadIds: string[];
        userIds: string[];
    }): Promise<void>;
    sGetRooms(userId: string): Promise<any>;
    sChatMessages(user: IUser, room: string): Promise<any>;
    sSendMessage(roomId: string, message: IReqOfSSendMessage): Promise<any>;
}
