import { Injectable } from '@angular/core';
import { Item } from './interfaces/item';

@Injectable({
  providedIn: 'root',
})
export class InventoryService {
  inventory: Item[] = [
    {
      name: 'Trail Mix',
      price: 2.0,
      count: 10,
      id: 1,
    },
    {
      name: 'Water Bottle',
      price: 1.0,
      count: 50,
      id: 2,
    },
    {
      name: 'Cheese and Crackers',
      price: 2.5,
      count: 5,
      id: 3,
    },
  ];
  nextId: number = 4;

  constructor() {}

  getInventoryItems = (searchParams: any): Item[] => {
    let filteredInventoryItems = this.inventory;
    if (searchParams.minPrice) {
      filteredInventoryItems = filteredInventoryItems.filter(
        (item) => item.price >= searchParams.minPrice
      );
    }
    if (searchParams.maxPrice) {
      filteredInventoryItems = filteredInventoryItems.filter(
        (item) => item.price <= searchParams.maxPrice
      );
    }
    if (searchParams.maxCount) {
      filteredInventoryItems = filteredInventoryItems.filter(
        (item) => item.count <= searchParams.maxCount
      );
    }
    return filteredInventoryItems;
  };

  updateInventoryItem = (itemObject: Item): void => {
    let index: number = this.inventory.findIndex(
      (item) => item.id === itemObject.id
    );
    this.inventory[index] = itemObject;
  };

  addItem = (formObject: any) => {
    let newItem = formObject;
    newItem.id = this.nextId++;
    this.inventory.push(newItem);
  };

  deleteItem = (deleteItem: Item): void => {
    let index: number = this.inventory.findIndex(
      (item) => item.id === deleteItem.id
    );
    this.inventory.splice(index, 1);
  };
}
