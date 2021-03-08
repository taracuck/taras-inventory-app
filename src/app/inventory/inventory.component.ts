import { Component, OnInit } from '@angular/core';
import { Item } from '../interfaces/item';
import { InventoryService } from '../inventory.service';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css'],
})
export class InventoryComponent implements OnInit {
  inventory: Item[] = [];
  searchParams: any = {
    minPrice: '',
    maxPrice: '',
    maxCount: '',
  };

  constructor(private inventoryService: InventoryService) {}

  ngOnInit(): void {
    this.getAndSetInventory();
  }

  getAndSetInventory = (): void => {
    this.inventory = this.inventoryService.getInventoryItems(this.searchParams);
  };

  updateInventoryItem = (itemObject: Item) => {
    this.inventoryService.updateInventoryItem(itemObject);
    this.getAndSetInventory();
  };

  addItem = (formObject: any) => {
    this.inventoryService.addItem(formObject);
    this.getAndSetInventory();
  };

  deleteItem = (item: Item) => {
    this.inventoryService.deleteItem(item);
    this.getAndSetInventory();
  };

  setFilter = (formObject: any): void => {
    this.searchParams = formObject;
    this.getAndSetInventory();
  };

  clearFilter = (): void => {
    this.searchParams = {};
    this.getAndSetInventory();
  };
}
