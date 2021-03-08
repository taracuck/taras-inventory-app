import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent implements OnInit {
  form!: FormGroup;

  constructor() {}

  ngOnInit() {
    this.createForm();
    this.listenToPriceChange();
    // this.listenToNameChange();
  }

  createForm = () => {
    this.form = new FormGroup({
      name: new FormControl(''),
      price: new FormControl(''),
      count: new FormControl(''),
    });
  };

  listenToNameChange() {
    this.form.controls.age.valueChanges.subscribe((name) => {
      if (name.length < 3) {
        this.form.controls.age.setErrors({ invalidName: true }); // <--- Set invalidNumber to true
      } else {
        this.form.controls.age.setErrors(null);
      }
    });
  }

  listenToPriceChange() {
    this.form.controls.price.valueChanges.subscribe((price) => {
      if (isNaN(price)) {
        this.form.controls.price.setErrors({ invalidNumber: true }); // <--- Set invalidNumber to true
      } else {
        this.form.controls.price.setErrors(null);
      }
    });
  }
}
