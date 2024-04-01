import { Strategy } from 'passport-jwt';
import { Model } from 'mongoose';
import { IUser } from 'src/users/interfaces/user.interface';
import { ConfigService } from '@nestjs/config';
import { JwtPayload } from 'jsonwebtoken';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private readonly User;
    private readonly configService;
    constructor(User: Model<IUser>, configService: ConfigService);
    validate(payload: JwtPayload): Promise<IUser>;
}
export {};
