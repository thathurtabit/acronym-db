import { Action } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import {
  getAcronyms,
  getAcronymsSuccess,
  getAcronymsError,
} from './acronym-table.actions';

export const initialState = { list: [], fetching: false, hasError: false };

const reducer = createReducer(
  initialState,
  on(getAcronyms.action, (state) => {
    return {
      ...state,
      fetching: true,
      hasError: false,
    };
  }),
  on(getAcronymsSuccess.action, (state, { payload }) => {
    return {
      ...state,
      list: payload,
      fetching: false,
      hasError: false,
    };
  }),
  on(getAcronymsError.action, (state) => {
    return {
      ...state,
      fetching: false,
      hasError: true,
    };
  })
);

export function acronymsTableReducer(state: any, action: Action) {
  return reducer(state, action);
}
