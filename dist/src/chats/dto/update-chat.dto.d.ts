import { messageSchmeDto } from 'src/chats/dto/create-message.dto';
export declare class UpdateChatRoomDto {
    room: string;
    to: string;
    from: string;
    message: messageSchmeDto;
    isReadMessage: number;
    isDeliveredMessage: boolean;
}
