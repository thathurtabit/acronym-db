import {
  createAcronym,
  createAcronymSuccess,
  createAcronymError,
} from './../state/add-acronym.actions';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';
import { AcronymsService } from '../../../services/acronyms.service';
import { Action } from '@ngrx/store';
import { IAcronym } from 'src/app/models/acronyms.types';

@Injectable()
export class CreateAcronymServiceEffects {
  createAcronym$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(createAcronym.action),
      map((action) => action.payload),
      mergeMap((payload) =>
        this.acronymsService.createAcronym(payload).pipe(
          map((response) => ({
            type: createAcronymSuccess.type,
            payload: response.data,
          })),
          catchError(() => of({ type: createAcronymError.type }))
        )
      )
    )
  );

  constructor(
    private actions$: Actions,
    private acronymsService: AcronymsService
  ) {}
}
