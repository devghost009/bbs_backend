import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class UnauthorizedExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
