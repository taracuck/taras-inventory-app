import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css'],
})
export class UpdateFormComponent implements OnInit {
  nameError: boolean = false;
  priceError: boolean = false;
  countError: boolean = false;

  @Input() updateItemRef!: Item;
  @Output() updateEvent = new EventEmitter<any>();
  @Output() closeEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  // emitUpdateEvent = (form: NgForm): void => {
  //   this.updateEvent.emit(form.form.value);
  // };

  emitCloseEvent = (): void => {
    this.closeEvent.emit();
  };

  emitUpdateEvent = (form: NgForm) => {
    console.log(form.form.value);
    form.form.value.price = parseFloat(form.form.value.price);
    form.form.value.count = parseFloat(form.form.value.count);
    if (form) {
      if (form.form.value.name.length < 3 || form.form.value.name === '') {
        this.nameError = true;
      }
      if (
        form.form.value.price < 0 ||
        form.form.value.price > 1000 ||
        form.form.value.price === ''
      ) {
        this.priceError = true;
      }
      if (
        form.form.value.count < 0 ||
        form.form.value.count > 1000 ||
        form.form.value.count === ''
      ) {
        this.countError = true;
      } else if (
        form.form.value.name.length >= 3 &&
        form.form.value.price >= 0 &&
        form.form.value.price <= 1000 &&
        form.form.value.count >= 0 &&
        form.form.value.count <= 1000
      ) {
        console.log(form.form.value.price);
        this.updateEvent.emit(form.form.value);
      }
    }
  };
}
