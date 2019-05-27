import { MatChipInputEvent } from '@angular/material';

import { FuseUtils } from '@fuse/utils';

export class Customer
{
    account: string;
    accountType: string;
    address1: string;
    
    address2: string;
    address3: string;
    address4: string;
    addressNote: string;
    addressRef: string;
    branches: boolean;
    catalogAddressID: number;
    companyID: number;
    contact: string;
    countryID: number;
    createdDate: Date;
    creditLimit: number;
    currencyID: number;
    customerBranches: [];
    customerOriginID: number;
    deliveryMethod: string;
    discount: number;
    email2: string;
    emailAddress: string;
    export: boolean;
    fax: string;
    firstOrderDate: Date;
    firstname: string;
    hasAccessToLifestyleImages: boolean;
    howFound: string;
    invoiceCount: number;
    invoiceOutstanding: number;
    isOnlyOnlineRetailer: boolean;
    isVATNumberValid: string;
    lastCash: string;
    detailsLastUpdated: Date
    lastOrdered: string;
    latitude: number;
    longitude: number;
    migrated: boolean;
    mobile: string;
    name: string;
    noOfRetailPermises: string;
    notes: string;
    originalBalance: string;
    originator: number;
    other1: string;
    outstanding: number;
    postcode: string;
    recommendedStockist: boolean;
    retailerType: string;
    sellerType: string;
    sellingOnWebsites: string;
    settlementDays: number;
    shortname: string;
    stop: boolean;
    surname: string;
    telephone: string;
    terms: string;
    termsAgreed: boolean;
    timeStampID: string;
    title: string;
    tradeMarketingOptOut: boolean;
    tradePeriod: string;
    transactionOutstanding: number;
    vatNumber: string;
    wantsCatalogue: string;
    webAccountID: number;
    webAddress: string;
    agreementDates: string;
    acceptedDates: string;
    selDepartment: string;

    /**
     * Constructor
     *
     * @param customer
     */
    constructor(customer?)
    {
        customer = customer || {};
        this.account = customer.account || '';
        this.accountType = customer.accountType || '';
        this.address1 = customer.address1 || '';
        this.address2 = customer.address2 || '';
        this.address3 = customer.address3 || '';
        this.address4 = customer.address4 || '';
        this.addressNote = customer.addressNote || '';
        this.addressRef = customer.addressRef || '';
        this.branches = customer.branches || false;
        this.catalogAddressID = customer.catalogAddressID || 0;
        this.companyID = customer.companyID || 0;
        this.contact = customer.contact || '';
        this.countryID = customer.countryID || 0;
        this.createdDate = customer.createdDate || new Date();
        this.creditLimit = customer.creditLimit || 0;
        this.currencyID = customer.currencyID || 0;
        this.customerBranches = customer.customerBranches || [];
        this.customerOriginID = customer.customerOriginID || 0;
        this.deliveryMethod = customer.deliveryMethod || '';
        this.discount = customer.discount || 0;
        this.email2 = customer.email2 || '';
        this.emailAddress = customer.emailAddress || '';
        this.export = customer.export || false;
        this.fax = customer.fax || '';
        this.firstOrderDate = customer.firstOrderDate || new Date();
        this.firstname = customer.firstname || '';
        this.hasAccessToLifestyleImages = customer.hasAccessToLifestyleImages || false;
        this.howFound = customer.howFound || '';
        this.invoiceCount = customer.invoiceCount || 0;
        this.invoiceOutstanding = customer.invoiceOutstanding || 0;
        this.isOnlyOnlineRetailer = customer.isOnlyOnlineRetailer || false;
        this.isVATNumberValid = customer.isVATNumberValid || '';
        this.lastCash = customer.lastCash || '';
        this.lastOrdered = customer.lastOrdered || '';
        this.detailsLastUpdated = customer.detailsLastUpdated || new Date();
        this.latitude = customer.latitude || 0;
        this.longitude = customer.longitude || 0;
        this.migrated = customer.migrated || false;
        this.mobile = customer.mobile || '';
        this.name = customer.name || '';
        this.noOfRetailPermises = customer.noOfRetailPermises || '';
        this.notes = customer.notes || '';
        this.originalBalance = customer.originalBalance || '';
        this.originator = customer.originator || 0;
        this.other1 = customer.other1 || '';
        this.outstanding = customer.outstanding || 0;
        this.postcode = customer.postcode || '';
        this.recommendedStockist = customer.recommendedStockist || false;
        this.retailerType = customer.retailerType || '';
        this.sellerType = customer.sellerType || '';
        this.sellingOnWebsites = customer.sellingOnWebsites || '';
        this.settlementDays = customer.settlementDays || 0;
        this.shortname = customer.shortname || '';
        this.stop = customer.stop || false;
        this.surname = customer.surname || '';
        this.telephone = customer.telephone || '';
        this.terms = customer.terms || '';
        this.termsAgreed = customer.termsAgreed || false;
        this.timeStampID = customer.timeStampID || '';
        this.title = customer.title || '';
        this.tradeMarketingOptOut = customer.tradeMarketingOptOut || false;
        this.tradePeriod = customer.tradePeriod || '';
        this.transactionOutstanding = customer.transactionOutstanding || 0;
        this.vatNumber = customer.vatNumber || '';
        this.wantsCatalogue = customer.wantsCatalogue || '';
        this.webAccountID = customer.webAccountID || 0;
        this.webAddress = customer.webAddress || '';    
        this.agreementDates = customer.agreementDates || '';
        this.acceptedDates = customer.acceptedDates || '';
    }

    /**
     * Add category
     *
     * @param {MatChipInputEvent} event
     */
}
