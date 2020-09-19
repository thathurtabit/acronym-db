import { state } from '@angular/animations';
import { getAcronyms } from './state/acronym-table.actions';
import { Observable } from 'rxjs';
import { Component, OnInit, OnChanges } from '@angular/core';
import { IAcronym } from '../../models/acronyms.types';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-acronym-table',
  templateUrl: './acronym-table.component.html',
  styleUrls: ['./acronym-table.component.scss'],
})
export class AcronymTableComponent implements OnInit, OnChanges  {
  acronyms$: Observable<IAcronym[]> = this.store.select(state => state.acronyms);
  isLoading = true;
  hasError: boolean;
  searchFilter = '';
  openMoreTitle = 'more';
  acronymsInit: IAcronym[];
  acronyms: IAcronym[];
  acronymsColHeaders: string[] = [
    'name',
    'title',
    'description',
    this.openMoreTitle,
  ];
  acronymsColData: string[] = [...this.acronymsColHeaders];

  constructor(private store: Store<{ acronyms: IAcronym[] }>) {}

  sortAcronymData(data: IAcronym[]): IAcronym[] {
    return data.sort((a, b) => {
      const textA = a.name.toUpperCase();
      const textB = b.name.toUpperCase();
      return textA < textB ? -1 : textA > textB ? 1 : 0;
    });
  }

  ngOnInit(): void {
    this.store.dispatch({ type: getAcronyms.type });
    // this.isLoading = false;
  }

  ngOnChanges(): void {
    this.isLoading = false;
  }

  onSearchInput(value: string): void {
    this.searchFilter = value;
    if (value !== '') {
      this.acronyms = this.acronyms.filter((acronym: IAcronym) =>
        acronym.name.toUpperCase().includes(this.searchFilter.toUpperCase())
      );
    } else {
      this.acronyms = this.acronymsInit;
    }
  }
}
