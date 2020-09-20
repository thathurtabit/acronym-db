import { IAcronym } from '../../../models/acronyms.types';
import { createSelector } from '@ngrx/store';

export const getEditedAcronym = (state) => state.acronyms.lastEdited.acronym;
export const getEditedAcronymWorking = (state) =>
  state.acronyms.lastEdited.working;
export const getEditedAcronymHasError = (state) =>
  state.acronyms.lastEdited.hasError;

export const selectEditedAcronym = createSelector(
  getEditedAcronym,
  (acronym: IAcronym) => acronym
);

export const selectEditedAcronymWorking = createSelector(
  getEditedAcronymWorking,
  (working: boolean) => working
);

export const selectEditedAcronymHasError = createSelector(
  getEditedAcronymHasError,
  (hasError: boolean) => hasError
);
