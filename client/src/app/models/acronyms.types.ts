import { Action } from '@ngrx/store';
export interface IAcronymsState {
  list: IAcronym[];
  fetching: boolean;
  hasError: boolean;
}

export interface IAcronymCreateState {
  acronym: IAcronym;
  working: boolean;
  hasError: boolean;
}

export interface IAppState {
  acronyms: {
    table: IAcronymsState;
    create: IAcronymCreateState;
  };
}

export interface IAppStateAndAction {
  state: IAppState;
  action: Action;
}

export interface IGetAcronymsService {
  success: boolean;
  data: IAcronym[];
}

export interface ICreateAcronymsService extends IGetAcronymsService {}

export interface IAcronym {
  _id: string;
  name: string;
  title: string;
  description: string;
  link: string;
  author: string;
}
