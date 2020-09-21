import {
  deleteAcronym,
  deleteAcronymSuccess,
  deleteAcronymError,
} from './../state/delete-acronym.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { AcronymsService } from '../../../services/acronyms.service';
import { Action } from '@ngrx/store';

@Injectable()
export class DeleteAcronymServiceEffects {
  deleteAcronym$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteAcronym.action),
      map((action) => action),
      mergeMap(({ id }) =>
        this.acronymsService.deleteAcronym(id).pipe(
          map((response) => ({
            type: deleteAcronymSuccess.type,
            payload: response.data,
          })),
          catchError(() => of({ type: deleteAcronymError.type }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private acronymsService: AcronymsService
  ) {}
}
