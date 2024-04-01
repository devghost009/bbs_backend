import { ConfigService } from '@nestjs/config';
import { Model } from 'mongoose';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { ResetPasswordUserDto } from 'src/users/dto/resetPassword-user.dto';
import { UpdateUserPasswordDto } from 'src/users/dto/updatePassword-user.dto';
import { IUser } from 'src/users/interfaces/user.interface';
import { EmailService } from 'src/utils/utils.email.service';
import { ContactItem } from 'src/communication/communication.service';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AppConfigsService } from 'src/app-configs/app-configs.service';
export declare class AuthService {
    private readonly User;
    private readonly Contact;
    private readonly emailService;
    private readonly configService;
    private readonly appConfigService;
    constructor(User: Model<IUser>, Contact: Model<ContactItem>, emailService: EmailService, configService: ConfigService, appConfigService: AppConfigsService);
    addFCMToken: (token: any) => {};
    removeFCMToken: (token: any) => {};
    addPushNotificationIds_onLogin: (userName: any, token: any) => Promise<void>;
    signToken(id: string): string;
    createSendToken(user: IUser): {
        token: string;
        user: IUser;
    };
    createDummyUser(payload: {
        firstName: string;
    }): Promise<{
        user: IUser;
        token: string;
    }>;
    signup(createUserDto: CreateUserDto): Promise<{
        user: IUser;
        token: string;
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        user: IUser;
        token: string;
    }>;
    adminLogin(loginUserDto: LoginUserDto): Promise<{
        user: IUser;
        token: string;
    }>;
    logout(fcmToken: string, id: string): Promise<any>;
    forgotPassword(email: string, protocol: string, host: string): Promise<any>;
    resetPassword(resetPasswordUserDto: ResetPasswordUserDto): Promise<{
        status: boolean;
        homeUrl: string;
    }>;
    updatePassword(updateUserPasswordDto: UpdateUserPasswordDto, _user: IUser): Promise<{
        user: IUser;
        token: string;
    }>;
}
