import {
  getAcronyms,
  getAcronymsSuccess,
  getAcronymsError,
} from './../state/acronym-table.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { AcronymsService } from '../../../services/acronyms.service';
import { Action } from '@ngrx/store';

@Injectable()
export class AcronymsTableServiceEffects {
  getAcronyms$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType<Action>(getAcronyms.type),
      mergeMap(() =>
        this.acronymsService.getAcronyms().pipe(
          map((response) => ({
            type: getAcronymsSuccess.type,
            payload: response.data,
          })),
          catchError(() => of({ type: getAcronymsError.type }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private acronymsService: AcronymsService
  ) {}
}
