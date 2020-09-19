import { IAcronym } from './../../../models/acronyms.types';
import { createAction, props } from '@ngrx/store';

// Pending
const getAcronymsActionName = '[Acronyms Table] Get Acronyms';
export const getAcronyms = {
  type: getAcronymsActionName,
  action: createAction(getAcronymsActionName, props()),
};

// Success
const getAcronymsSuccessActionName = '[Acronyms Table] Get Acronyms Success';
export const getAcronymsSuccess = {
  type: getAcronymsSuccessActionName,
  action: createAction(
    getAcronymsSuccessActionName,
    props<{ payload: IAcronym[] }>()
  ),
};

// Error
const getAcronymsErrorActionName = '[Acronyms Table] Get Acronyms Error';
export const getAcronymsError = {
  type: getAcronymsErrorActionName,
  action: createAction(getAcronymsErrorActionName, props()),
};
