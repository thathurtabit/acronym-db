import { IAcronym } from '../../../models/acronyms.types';
import { createSelector } from '@ngrx/store';

export const getDeletedAcronym = (state) => state.acronyms.lastDeleted.acronym;
export const getDeletedAcronymWorking = (state) =>
  state.acronyms.lastDeleted.working;
export const getDeletedAcronymHasError = (state) =>
  state.acronyms.lastDeleted.hasError;

export const selectDeletedAcronym = createSelector(
  getDeletedAcronym,
  (acronym: IAcronym) => acronym
);

export const selectDeletedAcronymWorking = createSelector(
  getDeletedAcronymWorking,
  (working: boolean) => working
);

export const selectDeletedAcronymHasError = createSelector(
  getDeletedAcronymHasError,
  (hasError: boolean) => hasError
);
