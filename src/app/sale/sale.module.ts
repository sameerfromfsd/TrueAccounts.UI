import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaleInvoiceComponent } from './sale-invoice/sale-invoice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SaleRoutingModule } from './sale-routing.module';
import { SaleComponent } from './sale.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    SaleInvoiceComponent,
    SaleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SaleRoutingModule,
    ToastrModule
  ],
  exports:[
    SaleInvoiceComponent,
 
  ]
})
export class SaleModule { }