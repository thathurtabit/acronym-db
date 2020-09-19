import {
  IAppState,
  IAcronym,
  IAcronymsState,
} from './../models/acronyms.types';
import { createSelector } from '@ngrx/store';

export const getAcronyms = (state: IAppState) => state.acronyms;
export const getAcronymsList = (state: IAppState) => state.acronyms.list;
export const getAcronymsFetching = (state: IAppState) =>
  state.acronyms.fetching;
export const getAcronymsHasError = (state: IAppState) =>
  state.acronyms.hasError;

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
