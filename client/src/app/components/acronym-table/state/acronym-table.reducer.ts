import {
  createAcronym,
  createAcronymSuccess,
  createAcronymError,
} from './../../add-acronym-dialog/state/add-acronym.actions';
import {
  editAcronym,
  editAcronymSuccess,
  editAcronymError,
} from './../../edit-acronym-dialog/state/edit-acronym.actions';
import { IAppState } from 'src/app/models/acronyms.types';
import { Action } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import {
  getAcronyms,
  getAcronymsSuccess,
  getAcronymsError,
} from './acronym-table.actions';

export const initialState: IAppState = {
  table: { list: undefined, fetching: false, hasError: false },
  create: { acronym: undefined, working: false, hasError: false },
  lastEdited: { acronym: undefined, working: false, hasError: false },
};

const reducer = createReducer(
  initialState,
  on(getAcronyms.action, (state: IAppState) => {
    return {
      ...state,
      table: {
        ...state.table,
        fetching: true,
        hasError: false,
      },
    };
  }),
  on(getAcronymsSuccess.action, (state, action) => {
    return {
      ...state,
      table: {
        ...state.table,
        list: action.payload,
        fetching: false,
        hasError: false,
      },
    };
  }),
  on(getAcronymsError.action, (state: IAppState) => {
    return {
      ...state,
      table: {
        ...state.table,
        fetching: false,
        hasError: true,
      },
    };
  }),
  on(createAcronym.action, (state) => {
    return {
      ...state,
      create: {
        ...state.create,
        working: true,
        hasError: false,
      },
    };
  }),
  on(createAcronymSuccess.action, (state, action) => {
    return {
      ...state,
      table: {
        ...state.table,
        list: [...state.table.list, action.payload],
      },
      create: {
        ...state.create,
        acronym: action.payload,
        working: false,
        hasError: false,
      },
    };
  }),
  on(createAcronymError.action, (state: IAppState) => {
    return {
      ...state,
      create: {
        ...state.create,
        working: false,
        hasError: true,
      },
    };
  }),
  on(editAcronym.action, (state) => {
    return {
      ...state,
      lastEdited: {
        ...state.lastEdited,
        working: true,
        hasError: false,
      },
    };
  }),
  on(editAcronymSuccess.action, (state, action) => {
    return {
      ...state,
      lastEdited: {
        ...state.lastEdited,
        acronym: action.payload,
        working: false,
        hasError: false,
      },
    };
  }),
  on(editAcronymError.action, (state: IAppState) => {
    return {
      ...state,
      lastEdited: {
        ...state.lastEdited,
        working: false,
        hasError: true,
      },
    };
  })
);

export function acronymsTableReducer(state: any, action: Action) {
  return reducer(state, action);
}
