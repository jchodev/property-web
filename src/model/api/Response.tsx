import { ErrorResponse } from './ErrorResponse';
import { PaginationResponse } from './PaginationResponse';

export interface Response<T> {
    statusCode: number;
    message: string;
    data?: T;
    pagination?: PaginationResponse;
}