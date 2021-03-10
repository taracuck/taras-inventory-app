import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
})
export class FilterFormComponent implements OnInit {
  @Output() submitEvent = new EventEmitter<any>();
  @Output() clearEvent = new EventEmitter<void>();
  @Output() addEvent = new EventEmitter<any>();
  adding: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  emitSubmitEvent = (form: NgForm) => {
    console.log(form.form.value);
    this.submitEvent.emit(form.form.value);
    form.reset();
  };

  emitClearEvent = () => {
    this.clearEvent.emit();
  };

  toggleAdding = (): void => {
    this.adding = !this.adding;
  };

  addToInventory = (formObject: any): void => {
    this.toggleAdding();
    this.addEvent.emit(formObject);
  };
}
