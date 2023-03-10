import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CompanyComponent } from './company/company.component';
import { AdminComponent } from './admin.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { EditCompanyComponent } from './company/edit-company/edit-company.component';
import { FormsModule } from '@angular/forms';
import { BranchesComponent } from './Branches/branches/branches.component';
import { AddBranchComponent } from './Branches/add-branch/add-branch.component';
import { EditBranchComponent } from './Branches/edit-branch/edit-branch.component';
import { CashAccountComponent } from './cash-account/cash-account.component';


@NgModule({
  declarations: [
    CompanyComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    BranchesComponent,
    AddBranchComponent,
    EditBranchComponent,
    CashAccountComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
  ],
  exports: [
    CompanyComponent,
    AddCompanyComponent,
    EditCompanyComponent,
    BranchesComponent,
    AddBranchComponent,
    EditBranchComponent
  ]
})
export class AdminModule { }
