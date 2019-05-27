import { Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { MatSnackBar } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

import { IgxGridComponent } from 'igniteui-angular';

import { Customer } from 'app/main/customers/viewcustomer/viewcustomer.model';
import { ViewCustomerService } from 'app/main/customers/viewcustomer/viewcustomer.service';
import { debug } from 'util';

@Component({
    selector     : 'customers-viewcustomer',
    templateUrl  : './viewcustomer.component.html',
    styleUrls    : ['./viewcustomer.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ViewCustomerComponent implements OnInit, OnDestroy
{
    customer: Customer;
    pageType: string;
    customerForm: FormGroup;
    customerAct: string;
    countries: [];
    currencies: [];
    emailContactTypes: [];
    phoneContactTypes: [];

    @ViewChild('myGrid', { read: IgxGridComponent })
    public grid: IgxGridComponent;

    // Private
    private _unsubscribeAll: Subject<any>;

    /**
     * Constructor
     *
     * @param {CustomerService} _customerService
     * @param {FormBuilder} _formBuilder
     * @param {Location} _location
     * @param {MatSnackBar} _matSnackBar
     */
    constructor(
        private _customerService: ViewCustomerService,
        private _formBuilder: FormBuilder,
        private _location: Location,
        private _matSnackBar: MatSnackBar
    )
    {
        // Set the default
        this.customer = new Customer();

        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void
    {
        // Get bindable sources
        this._customerService.getBindableSources();
        this.customerAct = this._customerService.routeParams[0];
        // Subscribe to update customer on changes
        this._customerService.onCustomerChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(customer => {

                if ( customer )
                {
                    // alert(this.customerAct);
                    this.customer = new Customer(customer);
                    this.pageType = 'edit';
                }
                else
                {
                    //alert('new');
                    this.pageType = 'new';
                    this.customer = new Customer();
                }

                this.countries = this._customerService.countries;
            this.currencies = this._customerService.currencies;
            this.emailContactTypes = this._customerService.emailContactTypes;
            this.phoneContactTypes = this._customerService.phoneContactTypes;
                this.customerForm = this.createCustomerForm();
            });

            
    }

    /**
     * On destroy
     */
    ngOnDestroy(): void
    {
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Create customer form
     *
     * @returns {FormGroup}
     */
    createCustomerForm(): FormGroup
    {
        return this._formBuilder.group({
            account              : [this.customer.account],
            accountType            : [this.customer.accountType],
            address1            : [this.customer.address1],
            address2              : [this.customer.address2],
            address3              : [this.customer.address3],
            address4              : [this.customer.address4],
            addressNote              : [this.customer.addressNote],
            addressRef              : [this.customer.addressRef],
            branches              : [this.customer.branches],
            catalogAddressID              : [this.customer.catalogAddressID],
            companyID              : [this.customer.companyID],
            contact              : [this.customer.contact],
            countryID              : [this.customer.countryID],
            createdDate              : [this.customer.createdDate],
            creditLimit              : [this.customer.creditLimit],
            currencyID              : [this.customer.currencyID],
            customerBranches              : [this.customer.customerBranches],
            customerOriginID              : [this.customer.customerOriginID],
            deliveryMethod              : [this.customer.deliveryMethod],
            discount              : [this.customer.discount],
            email2              : [this.customer.email2],
            emailAddress              : [this.customer.emailAddress],
            export              : [this.customer.export],
            fax              : [this.customer.fax],
            firstOrderDate              : [this.customer.firstOrderDate],
            firstname              : [this.customer.firstname],
            hasAccessToLifestyleImages              : [this.customer.hasAccessToLifestyleImages],
            howFound              : [this.customer.howFound],
            invoiceCount              : [this.customer.invoiceCount],
            invoiceOutstanding              : [this.customer.invoiceOutstanding],
            isOnlyOnlineRetailer              : [this.customer.isOnlyOnlineRetailer],
            isVATNumberValid              : [this.customer.isVATNumberValid],
            lastCash              : [this.customer.lastCash],
            lastOrdered              : [this.customer.lastOrdered],
            detailsLastUpdated              : [this.customer.detailsLastUpdated],
            latitude              : [this.customer.latitude],
            longitude              : [this.customer.longitude],
            migrated              : [this.customer.migrated],
            mobile              : [this.customer.mobile],
            name              : [this.customer.name],
            noOfRetailPermises              : [this.customer.noOfRetailPermises],
            notes              : [this.customer.notes],
            originalBalance              : [this.customer.originalBalance],
            originator              : [this.customer.originator],
            other1              : [this.customer.other1],
            outstanding              : [this.customer.outstanding],
            postcode              : [this.customer.postcode],
            recommendedStockist              : [this.customer.recommendedStockist],
            retailerType              : [this.customer.retailerType],
            sellerType              : [this.customer.sellerType],
            sellingOnWebsites              : [this.customer.sellingOnWebsites],
            settlementDays              : [this.customer.settlementDays],
            shortname              : [this.customer.shortname],
            stop              : [this.customer.stop],
            surname              : [this.customer.surname],
            telephone              : [this.customer.telephone],
            terms              : [this.customer.terms],
            termsAgreed              : [this.customer.termsAgreed],
            timeStampID              : [this.customer.timeStampID],
            title              : [this.customer.title],
            tradeMarketingOptOut              : [this.customer.tradeMarketingOptOut],
            tradePeriod              : [this.customer.tradePeriod],
            transactionOutstanding              : [this.customer.transactionOutstanding],
            vatNumber              : [this.customer.vatNumber],
            wantsCatalogue              : [this.customer.wantsCatalogue],
            webAccountID              : [this.customer.webAccountID],
            webAddress              : [this.customer.webAddress],
            agreementDates              : [this.customer.agreementDates],
            acceptedDates              : [this.customer.acceptedDates]
        });
    }

    /**
     * Save customer
     */
    saveCustomer(): void
    {
        const data = this.customerForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._customerService.saveCustomer(data)
            .then(() => {

                // Trigger the subscription with new data
                this._customerService.onCustomerChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Customer saved', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });
            });
    }

    /**
     * Add customer
     */
    addCustomer(): void
    {
        const data = this.customerForm.getRawValue();
        data.handle = FuseUtils.handleize(data.name);

        this._customerService.addCustomer(data)
            .then(() => {

                // Trigger the subscription with new data
                this._customerService.onCustomerChanged.next(data);

                // Show the success message
                this._matSnackBar.open('Customer added', 'OK', {
                    verticalPosition: 'top',
                    duration        : 2000
                });

                // Change the location with new one
                this._location.go('customers/viewcustomer/' + this.customer.account + '/' + this.customer.account);
            });
    }
}
