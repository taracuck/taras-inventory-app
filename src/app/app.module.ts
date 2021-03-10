import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { FilterFormComponent } from './filter-form/filter-form.component';
import { ItemComponent } from './item/item.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUpdateFormComponent } from './add-update-form/add-update-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    FilterFormComponent,
    ItemComponent,
    PageNotFoundComponent,
    HeaderComponent,
    AddUpdateFormComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
