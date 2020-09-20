import {
  IAppState,
  IAcronym,
  IAcronymsState,
} from '../../../models/acronyms.types';
import { createSelector } from '@ngrx/store';

export const getCreatedAcronym = (state) => state.acronyms.create.acronym;
export const getCreatedAcronymWorking = (state) =>
  state.acronyms.create.working;
export const getCreatedAcronymHasError = (state) =>
  state.acronyms.create.hasError;

export const selectCreatedAcronym = createSelector(
  getCreatedAcronym,
  (acronym: IAcronym) => acronym
);

export const selectCreatedAcronymWorking = createSelector(
  getCreatedAcronymWorking,
  (working: boolean) => working
);

export const selectCreatedAcronymHasError = createSelector(
  getCreatedAcronymHasError,
  (hasError: boolean) => hasError
);
