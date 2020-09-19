import {
  IAppState,
  IAcronym,
  IAcronymsState,
} from '../../../models/acronyms.types';
import { createSelector } from '@ngrx/store';

export const getCreatedAcronym = (state: IAppState) =>
  state.acronyms.create.acronym;
export const getCreatedAcronymWorking = (state: IAppState) =>
  state.acronyms.create.working;
export const getCreatedAcronymHasError = (state: IAppState) =>
  state.acronyms.create.hasError;

export const selectCreatedAcronym = createSelector(
  getCreatedAcronym,
  (acronym: IAcronym) => acronym
);

export const selectgetCreatedAcronymWorking = createSelector(
  getCreatedAcronymWorking,
  (working: boolean) => working
);

export const selectgetCreatedAcronymHasError = createSelector(
  getCreatedAcronymHasError,
  (hasError: boolean) => hasError
);
