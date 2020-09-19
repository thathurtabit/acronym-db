import {
  IAppState,
  IAcronym,
  IAcronymsState,
} from '../../../models/acronyms.types';
import { createSelector } from '@ngrx/store';

export const getAcronyms = (state) => state.app.acronyms.table;
export const getAcronymsList = (state) => state.app.acronyms.table.list;
export const getAcronymsFetching = (state) => state.app.acronyms.table.fetching;
export const getAcronymsHasError = (state) => state.app.acronyms.table.hasError;

export const selectAcronymsState = createSelector(
  getAcronyms,
  (acronymsState: IAcronymsState) => acronymsState
);

export const selectAllAcronyms = createSelector(
  getAcronymsList,
  (acronyms: IAcronym[]) => acronyms
);

export const selectFetchingAcronyms = createSelector(
  getAcronymsFetching,
  (fetching: boolean) => fetching
);

export const selectHasErrorAcronyms = createSelector(
  getAcronymsHasError,
  (hasError: boolean) => hasError
);
