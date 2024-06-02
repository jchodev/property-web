import { ErrorResponse } from './ErrorResponse';

export interface Response<T> {
    data?: T;
    error?: ErrorResponse;
}