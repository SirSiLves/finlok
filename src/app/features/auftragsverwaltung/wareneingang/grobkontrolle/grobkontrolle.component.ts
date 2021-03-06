import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { users } from '@test/user-data';
import { statusEingangList } from '@test/status-data';
import { LayoutService } from '../../../../layout/layout.service';


@Component({
  selector: 'app-grobkontrolle',
  templateUrl: './grobkontrolle.component.html',
  styleUrls: ['./grobkontrolle.component.scss']
})
export class GrobkontrolleComponent {

  @Input() set data(auftrag: any) {
    this.auftrag = auftrag;
    this.auftragList = auftrag.produkte;
    this.total = auftrag.wert;
    this.fillFormGroup();

    if (this.status.value.value === 'GROBKONTROLLIERT' || this.status.value.value === 'FEINKONTROLLIERT' || this.status.value.value === 'EINGELAGERT') {
      this.auftragList.forEach((a: any) => {
        this.getForm(a).patchValue(a.anzahl);
      });
      this.setCountedTotal();
      this.formGroup?.disable();
    }
  };

  @Output() save$ = new EventEmitter<any>();

  auftrag: any;
  auftragList: any;
  formGroup?: FormGroup;
  countTotal = 0;
  total = 0;
  mobile$ = this.layoutService.mobile;

  statusListOptions = statusEingangList;
  bearbeiterOptions = users;

  constructor(
    private formBuilder: FormBuilder,
    private layoutService: LayoutService
  ) {
  }

  private fillFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      bemerkung: [''],
      status: [null],
      bearbeiter: [Validators.required]
    });

    this.status.patchValue(this.statusListOptions.filter(s => s.value === this.auftrag.status)[0]);

    this.auftragList.forEach((a: any) => {
      this.formGroup?.addControl(
        a.produkt + '.' + a.kategorie, this.formBuilder.control(null, Validators.required)
      );
    });
  }

  getForm(a: any): FormControl {
    const name = a.produkt + '.' + a.kategorie;
    return this.formGroup?.controls[name] as FormControl;
  }

  get bemerkung(): FormControl {
    return this.formGroup?.controls.bemerkung as FormControl;
  }

  get status(): FormControl {
    return this.formGroup?.controls.status as FormControl;
  }

  get bearbeiter(): FormControl {
    return this.formGroup?.controls.bearbeiter as FormControl;
  }

  setCountedTotal(): void {
    this.countTotal = this.auftragList.map((a: any) => this.getForm(a).value * a.wert).reduce((a1: any, a2: any) => a1 + a2);
  }

  save(): void {
    this.auftrag.status = this.status.value.value;

    if (this.status.value.value === 'GROBKONTROLLIERT') {
      this.formGroup?.disable();
      this.auftrag.inBearbeitung = false;
      this.save$.emit(this.auftrag);
    } else {
      this.auftrag.inBearbeitung = true;
    }

    this.formGroup?.markAsUntouched();
    this.formGroup?.markAsPristine();
  }

  cancel(): void {
    this.formGroup?.reset();
    this.countTotal = 0;
  }

  canClose(): boolean {
    return (this.status.value.value === 'GROBKONTROLLIERT'
      && (this.countTotal !== this.total && !this.bemerkung.value));
  }
}
