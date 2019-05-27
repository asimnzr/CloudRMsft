import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic VGVzdFVzZXI6UGFzc3dvcmQ="
    })
};

@Injectable()
export class MyCustomersService implements Resolve<any> {
    mycustomers: any[];
    filterText = "";
    apiBaseURL = "http://a/api/";
    apiDefaultURL: string =
        this.apiBaseURL +
        `customer/ListCustomers/''/false/'ShowBoth'/4/3/3/true/false/0/0`;

    onCustomerChanged: BehaviorSubject<any>;

    /**
     * Constructor
     *
     * @param {HttpClient} _httpClient
     */
    constructor(private _httpClient: HttpClient) {
        // Set the defaults
        this.onCustomerChanged = new BehaviorSubject({});
    }

    /**
     * Resolver
     *
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        return new Promise((resolve, reject) => {
            Promise.all([
                this.getCustomers("", false, "", 4, 3, 3, false, false, "", 0)
            ]).then(() => {
                resolve();
            }, reject);
        });
    }

    /**
     * Get customers
     *
     * @returns {Promise<any>}
     */
    /* "/{filterText}/{showDeleted}/{stopped}/{website}/{subscribed}/{export}/{includeBranches}/
    {onlyWithInvoiceInLast12Months}/{customerOriginID}/{recommendedStockist}"
    */
    getCustomers(
        filterText: string,
        showDeleted: boolean,
        stopped: string,
        website: number,
        mailingListSubscribed: number,
        mailingListExport: number,
        includeBranches: boolean,
        onlyWithInvoiceInLast12Months: boolean,
        tradeShow: string, // CustomerOriginID
        recommendedStockist: number
    ): Promise<any> {
        let apiURL: string = this.apiDefaultURL;
        if (filterText !== "") {
            tradeShow = null;
            apiURL =
                this.apiBaseURL +
                "customer/ListCustomers" +
                `/${filterText}/${showDeleted}/${stopped}/${website}/${mailingListSubscribed}/${mailingListExport}/${includeBranches}/${onlyWithInvoiceInLast12Months}/${tradeShow}/${recommendedStockist}`;
        }

        return new Promise((resolve, reject) => {
            this._httpClient
                .get(apiURL, httpOptions)
                .subscribe((response: any) => {
                    this.mycustomers = response;
                    this.onCustomerChanged.next(this.mycustomers);
                    resolve(response);
                }, reject);
        });
    }
}
