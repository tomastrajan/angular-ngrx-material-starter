import { HttpErrorResponse } from '@angular/common/http';
import { ActionCreator, createAction } from '@ngrx/store';
import { TypedAction } from '@ngrx/store/src/models';

export function createHTTPActions<
  RequestPayload = void,
  ResponsePayload = void,
  ErrorPayload = HttpErrorResponse
>(
  actionType: string
): [
  ActionCreator<
    string,
    (props?: RequestPayload) => {
      payload?: RequestPayload;
    } & TypedAction<string>
  >,
  ActionCreator<
    string,
    (props?: ResponsePayload) => {
      payload?: ResponsePayload;
    } & TypedAction<string>
  >,
  ActionCreator<
    string,
    (props?: ErrorPayload) => {
      payload?: ErrorPayload;
    } & TypedAction<string>
  >
] {
  return [
    createAction(actionType, (payload?: RequestPayload) => ({ payload })),
    createAction(`${actionType} Success`, (payload?: ResponsePayload) => ({
      payload
    })),
    createAction(`${actionType} Error`, (payload?: ErrorPayload) => ({
      payload
    }))
  ];
}
