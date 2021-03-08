import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.css'],
})
export class AddFormComponent implements OnInit {
  @Output() addEvent = new EventEmitter<Item>();
  @Output() closeEvent = new EventEmitter<void>();

  nameError: boolean = false;
  priceError: boolean = false;
  countError: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  emitCloseEvent = (): void => {
    this.closeEvent.emit();
  };

  emitAddEvent = (form: NgForm) => {
    console.log(form.form.value);
    if (form) {
      if (form.form.value.name.length < 3 || form.form.value.name === '') {
        this.nameError = true;
      }
      if (
        form.form.value.price < 0 ||
        form.form.value.price > 1000 ||
        form.form.value.price === ''
      ) {
        console.log(form.form.value.price);
        console.log(form.form.value.price < 0);
        console.log('price error');
        this.priceError = true;
      }
      if (
        form.form.value.count < 0 ||
        form.form.value.count > 1000 ||
        form.form.value.count === ''
      ) {
        console.log('countError');
        this.countError = true;
      } else if (
        form.form.value.name.length >= 3 &&
        form.form.value.price >= 0 &&
        form.form.value.price <= 1000 &&
        form.form.value.count >= 0 &&
        form.form.value.count <= 1000
      ) {
        this.addEvent.emit(form.form.value);
      }
    }
  };
}
