import { ExceptionFilter, ArgumentsHost, HttpException } from '@nestjs/common';
export declare class PayloadTooLargeExceptionFilter implements ExceptionFilter {
    catch(exception: HttpException, host: ArgumentsHost): void;
}
