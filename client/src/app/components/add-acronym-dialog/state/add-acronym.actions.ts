import { IAcronym } from './../../../models/acronyms.types';
import { createAction, props, Action } from '@ngrx/store';

// Pending
const postAcronymActionName = '[Acronyms Table] Create Acronym';
export const createAcronym = {
  type: postAcronymActionName,
  action: createAction(postAcronymActionName, props<{ payload: IAcronym }>()),
};

// Success
const postAcronymSuccessActionName = '[Acronyms Table] Create Acronym Success';
export const createAcronymSuccess = {
  type: postAcronymSuccessActionName,
  action: createAction(
    postAcronymSuccessActionName,
    props<{ payload: IAcronym }>()
  ),
};

// Error
const postAcronymErrorActionName = '[Acronyms Table] Create Acronym Error';
export const createAcronymError = {
  type: postAcronymErrorActionName,
  action: createAction(postAcronymErrorActionName, props()),
};
