import { Action } from '@ngrx/store';
import { createReducer, on } from '@ngrx/store';
import {
  getAcronyms,
  getAcronymsSuccess,
  getAcronymsError,
} from './acronym-table.actions';

export const initialState = { acronyms: [], fetching: true, hasError: false };

const reducer = createReducer(
  initialState,
  on(getAcronyms.action, (state) => {
    console.log('GET ACRONYMS');
    return {
      ...state,
      fetching: true,
      hasError: false,
    };
  }),
  on(getAcronymsSuccess.action, (state, { payload }) => {
    console.log('SUCCESS ACRONYMS');
    return {
      ...state,
      acronyms: payload,
      fetching: false,
      hasError: false,
    };
  }),
  on(getAcronymsError.action, (state) => {
    console.log('ERROR ACRONYMS');
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
