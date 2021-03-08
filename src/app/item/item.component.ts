import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() itemRef!: Item;
  @Output() updateInventoryEvent = new EventEmitter<Item>();
  @Output() deleteEvent = new EventEmitter<Item>();
  updating: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  toggleUpdating = (): void => {
    this.updating = !this.updating;
  };

  updateInventory = (formObject: any): void => {
    console.log(formObject);
    formObject.id = this.itemRef.id;
    this.updateInventoryEvent.emit(formObject);
  };

  emitDeleteEvent = (item: Item) => {
    this.deleteEvent.emit(item);
  };
}
