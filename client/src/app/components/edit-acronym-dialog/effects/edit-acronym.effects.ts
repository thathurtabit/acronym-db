import {
  editAcronym,
  editAcronymSuccess,
  editAcronymError,
} from './../state/edit-acronym.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { AcronymsService } from '../../../services/acronyms.service';
import { Action } from '@ngrx/store';
import { IAcronym } from 'src/app/models/acronyms.types';

@Injectable()
export class EditAcronymServiceEffects {
  editAcronym$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(editAcronym.action),
      map((action) => action),
      mergeMap(({ id, payload }) =>
        this.acronymsService.editAcronym(id, payload).pipe(
          map((response) => ({
            type: editAcronymSuccess.type,
            payload: response.data,
          })),
          catchError(() => of({ type: editAcronymError.type }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private acronymsService: AcronymsService
  ) {}
}
