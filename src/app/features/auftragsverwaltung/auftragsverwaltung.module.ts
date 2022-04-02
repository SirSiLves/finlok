import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuftragsverwaltungRoutingModule } from './auftragsverwaltung-routing.module';
import { AuftragsverwaltungComponent } from './auftragsverwaltung.component';
import { CardModule } from 'primeng/card';
import { AuftragslisteComponent } from './auftragsliste/auftragsliste.component';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { WareneingangComponent } from './wareneingang/wareneingang.component';
import { WarenausgangComponent } from './warenausgang/warenausgang.component';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { AuftragslisteDetailsComponent } from './auftragsliste-details/auftragsliste-details.component';
import { GrobkontrolleComponent } from './wareneingang/grobkontrolle/grobkontrolle.component';
import { AuftragserfassungModule } from '../auftragserfassung/auftragserfassung.module';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import { AccordionModule } from 'primeng/accordion';
import { FeinkontrolleComponent } from './wareneingang/feinkontrolle/feinkontrolle.component';


@NgModule({
  declarations: [
    AuftragsverwaltungComponent,
    AuftragslisteComponent,
    WareneingangComponent,
    WarenausgangComponent,
    GrobkontrolleComponent,
    AuftragslisteDetailsComponent,
    FeinkontrolleComponent
  ],
  imports: [
    CommonModule,
    AuftragsverwaltungRoutingModule,
    CardModule,
    TableModule,
    TooltipModule,
    InputTextModule,
    InputNumberModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    RippleModule,
    AuftragserfassungModule,
    InputTextareaModule,
    DropdownModule,
    AccordionModule
  ]
})
export class AuftragsverwaltungModule { }
