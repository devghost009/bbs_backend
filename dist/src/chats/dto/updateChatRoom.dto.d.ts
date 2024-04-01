import { messageSchmeDto } from 'src/chats/dto/create-message.dto';
export declare class UpdateChatRoomDto {
    name: string;
    user1: string;
    user2: string;
    ride: string;
    message: messageSchmeDto[];
    userOneUnreadCount: number;
    userTwoUnreadCount: number;
    status: string;
}
