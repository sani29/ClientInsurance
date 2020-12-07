import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './view/view.component';
import { ManagePoliciesComponent } from './view/manage-policies/manage-policies.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MonthlyRecordComponent } from './view/monthly-record/monthly-record.component';
import { PolicyHeaderComponent } from './view/policy-header/policy-header.component';
import { PolicyBodyComponent } from './view/manage-policies/policy-body/policy-body.component';
import { RecordHeaderComponent } from './view/monthly-record/record-header/record-header.component';
import { RecordBodyComponent } from './view/monthly-record/record-body/record-body.component';
import { PolicySearchComponent } from './view/manage-policies/policy-search/policy-search.component';
import { HttpClientModule } from '@angular/common/http';

// Material Modules
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';

@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    ManagePoliciesComponent,
    MonthlyRecordComponent,
    PolicyHeaderComponent,
    PolicyBodyComponent,
    RecordHeaderComponent,
    RecordBodyComponent,
    PolicySearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    //Material Modules
    MatTabsModule,
    MatCardModule,
    MatDividerModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
