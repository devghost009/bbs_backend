import { ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
export declare class InternalServerErrorExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
