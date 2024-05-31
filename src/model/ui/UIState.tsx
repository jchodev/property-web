import { ErrorResponse } from '../api/ErrorResponse';

export enum State {
    Loading,
    Success,
    Fail,
    Error
}

export interface UIState<T> {
    responseState: State;
    data?: T
    error?: ErrorResponse
}
