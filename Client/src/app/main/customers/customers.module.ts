import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
	MatButtonModule,
	MatChipsModule,
	MatExpansionModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatPaginatorModule,
	MatRippleModule,
	MatSelectModule,
	MatSnackBarModule,
	MatSortModule,
	MatTableModule,
	MatTabsModule,
	MatCheckboxModule,
	MatRadioModule,
	MatMenuModule,
	MatDialogModule,
	MatToolbarModule
} from '@angular/material';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AgmCoreModule } from '@agm/core';
import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';
import { FuseSidebarModule } from '@fuse/components';
import { MyCustomersComponent } from 'app/main/customers/mycustomers/mycustomers.component';
import { MyCustomersService } from 'app/main/customers/mycustomers/mycustomers.service';
import { ViewCustomerComponent } from 'app/main/customers/viewcustomer/viewcustomer.component';
import { ViewCustomerService } from 'app/main/customers/viewcustomer/viewcustomer.service';
//email
import { MailService } from 'app/main/customers/viewcustomer/mail/mail.service';
import { MailComponent } from 'app/main/customers/viewcustomer/mail/mail.component';
import { MailListComponent } from 'app/main/customers/viewcustomer/mail/mail-list/mail-list.component';
import { MailListItemComponent } from 'app/main/customers/viewcustomer/mail/mail-list/mail-list-item/mail-list-item.component';
import { MailDetailsComponent } from 'app/main/customers/viewcustomer/mail/mail-details/mail-details.component';
import { MailMainSidebarComponent } from 'app/main/customers/viewcustomer/mail/sidebars/main/main-sidebar.component';
import { MailComposeDialogComponent } from 'app/main/customers/viewcustomer/mail/dialogs/compose/compose.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IgxGridModule } from 'igniteui-angular';
//
const routes: Routes = [
    {
        path: 'customers/mycustomers',
        component: MyCustomersComponent,
        resolve: {
            data: MyCustomersService
        }
    },
    {
        path: 'customers/viewcustomer/:id',
        component: ViewCustomerComponent,
        resolve: {
            data: ViewCustomerService
        }
    },
    {
        path: 'customers/viewcustomer/:id/:handle',
        component: ViewCustomerComponent,
        resolve: {
            data: ViewCustomerService
        }
    },
    {
        path: 'label/:labelHandle',
        component: MailComponent,
        resolve: {
            mail: MailService
        }
    },
    {
        path: 'label/:labelHandle/:mailId',
        component: MailComponent,
        resolve: {
            mail: MailService
        }
    },
    {
        path: 'filter/:filterHandle',
        component: MailComponent,
        resolve: {
            mail: MailService
        }
    },
    {
        path: 'filter/:filterHandle/:mailId',
        component: MailComponent,
        resolve: {
            mail: MailService
        }
    },
    {
        path: ':folderHandle',
        component: MailComponent,
        resolve: {
            mail: MailService
        }
    },
    {
        path: ':folderHandle/:mailId',
        component: MailComponent,
        resolve: {
            mail: MailService
        }
    },
    {
        path: '**',
        redirectTo: 'inbox'
    }
];
@NgModule({
    declarations: [
        MyCustomersComponent,
        ViewCustomerComponent,
        MailComponent,
        MailListComponent,
        MailListItemComponent,
        MailDetailsComponent,
        MailMainSidebarComponent,
        MailComposeDialogComponent
    ],
    imports: [
        RouterModule.forChild(routes),
        MatButtonModule,
        MatChipsModule,
        MatExpansionModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatPaginatorModule,
        MatRippleModule,
        MatSelectModule,
        MatSortModule,
        MatSnackBarModule,
        MatTableModule,
        MatTabsModule,
        MatCheckboxModule,
        MatRadioModule,
        NgxChartsModule,
        MatMenuModule,
        MatDialogModule, MatToolbarModule,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyD81ecsCj4yYpcXSLFcYU97PvRsE_X8Bx8'
        }),
        FuseSharedModule,
        FuseWidgetModule,
        FuseSidebarModule,
        BrowserAnimationsModule,
        IgxGridModule.forRoot()
    ],
    providers: [
        MyCustomersService,
        ViewCustomerService,
        MailService
    ],
    entryComponents: [
        MailComposeDialogComponent
    ]
})
export class CustomersModule {
}
