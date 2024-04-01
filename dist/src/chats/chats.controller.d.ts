import { IUser } from 'src/users/interfaces/user.interface';
import { pagination } from 'src/utils/utils.types';
import { ChatsService } from './chats.service';
import { IReqOfSSendMessage } from './interfaces/chat.interface';
export declare class ChatsController {
    private readonly chatService;
    constructor(chatService: ChatsService);
    getRooms(user: IUser, query: pagination, type: string, search: string): Promise<{
        data: {
            data: import("./interfaces/room.interface").IRoom[];
            totalCount: number;
        };
    }>;
    getRoom(roomId: string): Promise<{
        data: import("./interfaces/room.interface").IRoom;
    }>;
    getGuestChats(user: IUser, query: pagination, search: string): Promise<{
        data: {
            data: import("./interfaces/room.interface").IRoom[];
            totalCount: number;
        };
    }>;
    getGuestRoomMessages(roomId: string): Promise<{
        data: {
            chat: import("./interfaces/chat.interface").IChat[];
            totalCount: number;
        };
    }>;
    chatMessages(user: IUser, room: string, query: pagination): Promise<{
        results: number;
        data: import("./interfaces/chat.interface").IChat[];
        totalCount: number;
    }>;
    startChat(user: IUser, userIds: string[], message: string): Promise<{
        data: import("./interfaces/room.interface").IRoom;
    }>;
    startChatForDummyUser(firstName: string, message: string): Promise<{
        data: any;
    }>;
    joinRoom(user: IUser, roomId: string): Promise<{
        status: string;
        data: import("./interfaces/room.interface").IRoom;
    }>;
    replyToGuestChat(user: IUser, roomId: string, message: string): Promise<{
        status: string;
        data: import("./interfaces/room.interface").IRoom;
    }>;
    leaveRoom(user: IUser, roomId: string): Promise<{
        status: string;
        data: [Error, import("./interfaces/room.interface").IRoom];
    }>;
    endRoom(roomId: string): Promise<{
        status: string;
        data: import("./interfaces/room.interface").IRoom;
    }>;
    sChatMessages(user: IUser, room: string): Promise<{
        results: any;
        data: any;
        totalCount: any;
    }>;
    sSendMessage(roomId: string, message: IReqOfSSendMessage): Promise<any>;
    sGetRooms(userId: string): Promise<any>;
}
