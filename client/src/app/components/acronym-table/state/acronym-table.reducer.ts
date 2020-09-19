import {
  createAcronym,
  createAcronymSuccess,
  createAcronymError,
} from './../../add-acronym-dialog/state/add-acronym.actions';
import { IAppState } from 'src/app/models/acronyms.types';
import { Action } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import {
  getAcronyms,
  getAcronymsSuccess,
  getAcronymsError,
} from './acronym-table.actions';

export const initialState: IAppState = {
  acronyms: {
    table: { list: undefined, fetching: false, hasError: false },
    create: { acronym: undefined, working: false, hasError: false },
  },
};

const reducer = createReducer(
  initialState,
  on(getAcronyms.action, (state: IAppState) => {
    return {
      ...state,
      acronyms: {
        ...state.acronyms,
        table: {
          ...state.acronyms.table,
          fetching: true,
          hasError: false,
        },
      },
    };
  }),
  on(getAcronymsSuccess.action, (state, action) => {
    return {
      ...state,
      acronyms: {
        ...state.acronyms,
        table: {
          ...state.acronyms.table,
          list: action.payload,
          fetching: false,
          hasError: false,
        },
      },
    };
  }),
  on(getAcronymsError.action, (state: IAppState) => {
    return {
      ...state,
      acronyms: {
        ...state.acronyms,
        table: {
          ...state.acronyms.table,
          fetching: false,
          hasError: true,
        },
      },
    };
  }),
  on(createAcronym.action, (state) => {
    return {
      ...state,
      acronyms: {
        ...state.acronyms,
        create: {
          ...state.acronyms.create,
          working: true,
          hasError: false,
        },
      },
    };
  }),
  on(createAcronymSuccess.action, (state, action) => {
    return {
      ...state,
      acronyms: {
        ...state.acronyms,
        create: {
          ...state.acronyms.create,
          acronym: action.payload,
          working: false,
          hasError: false,
        },
      },
    };
  }),
  on(createAcronymError.action, (state: IAppState) => {
    return {
      ...state,
      acronyms: {
        ...state.acronyms,
        create: {
          ...state.acronyms.create,
          working: false,
          hasError: true,
        },
      },
    };
  })
);

export function acronymsTableReducer(state: any, action: Action) {
  return reducer(state, action);
}
