import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { LoginUserDto } from 'src/users/dto/login-user.dto';
import { ResetPasswordUserDto } from 'src/users/dto/resetPassword-user.dto';
import { UpdateUserPasswordDto } from 'src/users/dto/updatePassword-user.dto';
import { IUser } from 'src/users/interfaces/user.interface';
import { S3Storage } from 'src/utils/utils.s3';
import { AuthService } from './auth.service';
import { SendgridService } from 'src/sendgrid/sendgrid.service';
export declare class AuthController {
    private readonly authService;
    private readonly s3Storage;
    private readonly configService;
    private readonly sendgridService;
    constructor(authService: AuthService, s3Storage: S3Storage, configService: ConfigService, sendgridService: SendgridService);
    signup(createUserDto: CreateUserDto): Promise<{
        status: string;
        data: {
            user: IUser;
            token: string;
        };
    }>;
    login(loginUserDto: LoginUserDto): Promise<{
        status: string;
        data: {
            user: IUser;
            token: string;
        };
    }>;
    adminLogin(loginUserDto: LoginUserDto): Promise<{
        status: string;
        data: {
            user: IUser;
            token: string;
        };
    }>;
    logout(fcmToken: string, user: IUser, res: Response): Promise<Response<any, Record<string, any>>>;
    forgotPassword(email: string, req: Request): Promise<any>;
    updatePassword(updateUserPasswordDto: UpdateUserPasswordDto, user: IUser): Promise<{
        user: IUser;
        token: string;
    }>;
    resetPassword(resetPasswordUserDto: ResetPasswordUserDto, token: string, res: Response): Promise<void>;
    resetPasswordToken(res: Response, token: string): Promise<never>;
}
