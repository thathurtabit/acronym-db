import { IShowAcronymTable } from './model/acronym-table.model';
import { map } from 'rxjs/operators';
import {
  selectAllAcronyms,
  selectFetchingAcronyms,
  selectHasErrorAcronyms,
} from './selectors/selectors';
import { IAppState, IAcronym } from 'src/app/models/acronyms.types';
import { getAcronyms } from './state/acronym-table.actions';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import * as utils from '../../utils/utils';

@Component({
  selector: 'app-acronym-table',
  templateUrl: './acronym-table.component.html',
  styleUrls: ['./acronym-table.component.scss'],
})
export class AcronymTableComponent implements OnInit {
  acronymsInit$: Observable<IAcronym[]>;
  acronyms$: Observable<IAcronym[]>;
  fetching$: Observable<boolean>;
  hasError$: Observable<boolean>;
  showAcronymTable: boolean;

  searchFilter = '';
  openMoreTitle = 'more';
  acronymsInit: IAcronym[];
  acronymsColHeaders: string[] = [
    'name',
    'title',
    'description',
    this.openMoreTitle,
  ];
  acronymsColData: string[] = [...this.acronymsColHeaders];

  constructor(private store: Store<IAppState>) {}

  ngOnInit(): void {
    this.store.dispatch({ type: getAcronyms.type });

    this.acronyms$ = this.store
      .pipe(select(selectAllAcronyms))
      .pipe(map((acronyms) => utils.sortAcronymData(acronyms)));
    this.acronymsInit$ = this.acronyms$;
    this.fetching$ = this.store.pipe(select(selectFetchingAcronyms));
    this.hasError$ = this.store.pipe(select(selectHasErrorAcronyms));

    let isFetching: boolean;
    let hasResults: boolean;

    this.fetching$.subscribe((value) => {
      isFetching = value;
      this.setShowAcronymTable({ isFetching, hasResults });
    });
    this.acronyms$.subscribe((arcs) => {
      hasResults = arcs?.length > 0;
      this.setShowAcronymTable({ isFetching, hasResults });
    });
  }

  setShowAcronymTable({ isFetching, hasResults }: IShowAcronymTable): void {
    this.showAcronymTable = !isFetching && hasResults;
  }

  onSearchInput(value: string): void {
    this.searchFilter = value;
    if (value !== '') {
      this.acronyms$ = this.acronyms$.pipe(
        map((acronyms) =>
          acronyms.filter((acronym) =>
            acronym.name.toUpperCase().includes(this.searchFilter.toUpperCase())
          )
        )
      );
    } else {
      this.acronyms$ = this.acronymsInit$;
    }
  }
}
