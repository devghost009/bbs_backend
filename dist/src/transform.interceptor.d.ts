import { NestInterceptor, ExecutionContext, CallHandler, ArgumentsHost, ExceptionFilter, HttpException } from '@nestjs/common';
import { MongoError } from 'mongodb';
export declare class TransformInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): import("rxjs").Observable<Record<string, any>>;
}
export declare class AllExceptionsFilter implements ExceptionFilter {
    handleCastErrorDB(err: any): HttpException;
    handleDuplicateFieldsDB(err: MongoError): HttpException;
    handleValidationErrorDB(err: any): HttpException;
    catch(exception: any, host: ArgumentsHost): HttpException;
}
