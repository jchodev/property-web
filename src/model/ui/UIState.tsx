import { ErrorResponse } from '../api/ErrorResponse';

export enum State {
    Loading,
    Success,
    Fail,
    Error
}

export interface UIState<T> {
    state: State;
    data?: T
    error?: ErrorResponse
}
