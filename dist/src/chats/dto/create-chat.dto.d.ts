import { messageSchmeDto } from 'src/chats/dto/create-message.dto';
export declare class CreateChatRoomDto {
    room: string;
    to: string;
    from: string;
    message: messageSchmeDto;
}
