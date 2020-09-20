import { IAcronym } from './../../../models/acronyms.types';
import { createAction, props } from '@ngrx/store';

// Pending
const putAcronymActionName = '[Acronyms Table] Edit Acronym';
export const editAcronym = {
  type: putAcronymActionName,
  action: createAction(
    putAcronymActionName,
    props<{ id: string; payload: IAcronym }>()
  ),
};

// Success
const putAcronymSuccessActionName = '[Acronyms Table] Edit Acronym Success';
export const editAcronymSuccess = {
  type: putAcronymSuccessActionName,
  action: createAction(
    putAcronymSuccessActionName,
    props<{ id: string; payload: IAcronym }>()
  ),
};

// Error
const putAcronymErrorActionName = '[Acronyms Table] Edit Acronym Error';
export const editAcronymError = {
  type: putAcronymErrorActionName,
  action: createAction(putAcronymErrorActionName, props()),
};
