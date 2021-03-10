import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-add-update-form',
  templateUrl: './add-update-form.component.html',
  styleUrls: ['./add-update-form.component.css'],
})
export class AddUpdateFormComponent implements OnInit {
  nameError: boolean = false;
  priceError: boolean = false;
  countError: boolean = false;

  @Input() updateItemRef!: Item;
  @Input() addBool!: boolean;
  @Input() updateBool!: boolean;
  @Output() addEvent = new EventEmitter<Item>();
  @Output() addCloseEvent = new EventEmitter<void>();
  @Output() updateEvent = new EventEmitter<any>();
  @Output() updateCloseEvent = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  emitCloseEvent = (): void => {
    console.log(this.addBool);
    if (this.addBool) {
      this.addCloseEvent.emit();
    } else if (this.updateBool) {
      this.updateCloseEvent.emit();
    }
  };

  emitSubmitEvent = (form: NgForm) => {
    form.form.value.price = parseFloat(form.form.value.price);
    form.form.value.count = parseFloat(form.form.value.count);
    if (form) {
      if (form.form.value.name.length < 3 || form.form.value.name === '') {
        this.nameError = true;
      } else {
        this.nameError = false;
      }
      if (
        form.form.value.price < 0 ||
        form.form.value.price > 1000 ||
        form.form.value.price === ''
      ) {
        this.priceError = true;
      } else {
        this.priceError = false;
      }
      if (
        form.form.value.count < 0 ||
        form.form.value.count > 1000 ||
        form.form.value.count === ''
      ) {
        this.countError = true;
      } else {
        this.countError = false;
      }
      if (
        form.form.value.name.length >= 3 &&
        form.form.value.price >= 0 &&
        form.form.value.price <= 1000 &&
        form.form.value.count >= 0 &&
        form.form.value.count <= 1000
      ) {
        if (this.addBool) {
          this.addEvent.emit(form.form.value);
        } else if (this.updateBool) {
          this.updateEvent.emit(form.form.value);
        }
      }
    }
  };
}
