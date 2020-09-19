import {
  IAcronym,
  ICreateAcronymsService,
  IGetAcronymsService,
} from './../models/acronyms.types';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AcronymsService {
  constructor(private http: HttpClient) {}
  private acronymnsEnpoint = 'http://localhost:3000/api'; // URL to web api

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(`${operation}: ${error}`); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };;
  }

  getAcronyms(): Observable<IGetAcronymsService> {
    return this.http
      .get<IGetAcronymsService>(`${this.acronymnsEnpoint}/acronyms`)
      .pipe(
        catchError(
          this.handleError<IGetAcronymsService>('getAcronyms', {
            success: false,
            data: [],
          })
        )
      );
  }

  createAcronym(data: IAcronym): Observable<ICreateAcronymsService> {
    return this.http
      .post<any>(`${this.acronymnsEnpoint}/acronym`, data)
      .pipe(
        catchError(this.handleError('createAcronym', { success: false, data }))
      );
  }

  editAcronym(id: string): Observable<IAcronym[]> {
    return of([
      {
        _id: 'id',
        title: 'title',
        name: 'name',
        description: 'description',
        link: 'link',
        author: 'author',
      },
    ]);
  }
}
