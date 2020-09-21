import { IAcronym } from './../../../models/acronyms.types';
import { createAction, props } from '@ngrx/store';

// Pending
const deleteAcronymActionName = '[Acronyms Table] Delete Acronym';
export const deleteAcronym = {
  type: deleteAcronymActionName,
  action: createAction(deleteAcronymActionName, props<{ id: string }>()),
};

// Success
const deleteAcronymSuccessActionName =
  '[Acronyms Table] Delete Acronym Success';
export const deleteAcronymSuccess = {
  type: deleteAcronymSuccessActionName,
  action: createAction(
    deleteAcronymSuccessActionName,
    props<{ id: string; payload: IAcronym }>()
  ),
};

// Error
const deleteAcronymErrorActionName = '[Acronyms Table] Delete Acronym Error';
export const deleteAcronymError = {
  type: deleteAcronymErrorActionName,
  action: createAction(deleteAcronymErrorActionName, props()),
};
