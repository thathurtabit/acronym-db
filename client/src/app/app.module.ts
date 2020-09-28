import { DeleteAcronymServiceEffects } from './components/delete-acronym-dialog/effects/delete-acronym.effects';
import { EditAcronymServiceEffects } from './components/edit-acronym-dialog/effects/edit-acronym.effects';
import { CreateAcronymServiceEffects } from './components/add-acronym-dialog/effects/add-acronym.effects';
import { AcronymsTableServiceEffects } from './components/acronym-table/effects/acronym-table.effects';
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AcronymTableComponent } from './components/acronym-table/acronym-table.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { MatDialogModule } from '@angular/material/dialog';
import { LearnMoreDialogComponent, LearnMoreOpenDialogComponent } from './components/learn-more-dialog/learn-more-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import {
  AddAcronymDialogComponent,
  AddAcronymOpenDialogComponent,
} from './components/add-acronym-dialog/add-acronym-dialog.component';
import {
  EditAcronymDialogComponent,
  EditAcronymOpenDialogComponent,
} from './components/edit-acronym-dialog/edit-acronym-dialog.component';
import {
  DeleteAcronymDialogComponent,
  DeleteAcronymOpenDialogComponent,
} from './components/delete-acronym-dialog/delete-acronym-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { acronymsTableReducer } from './components/acronym-table/state/acronym-table.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ServerErrorMessageComponent } from './components/server-error-message/server-error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    AcronymTableComponent,
    IntroductionComponent,
    NavBarComponent,
    LearnMoreDialogComponent,
    LearnMoreOpenDialogComponent,
    AddAcronymDialogComponent,
    AddAcronymOpenDialogComponent,
    EditAcronymDialogComponent,
    EditAcronymOpenDialogComponent,
    DeleteAcronymDialogComponent,
    DeleteAcronymOpenDialogComponent,
    ServerErrorMessageComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatCardModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({acronyms: acronymsTableReducer}),
    StoreDevtoolsModule.instrument({maxAge: 25}),
    EffectsModule.forRoot([AcronymsTableServiceEffects]),
    EffectsModule.forFeature([CreateAcronymServiceEffects, EditAcronymServiceEffects, DeleteAcronymServiceEffects])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule {}
