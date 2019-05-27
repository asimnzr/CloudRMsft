import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot
} from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { debug } from "util";

const httpOptions = {
    headers: new HttpHeaders({
        "Content-Type": "application/json",
        Authorization: "Basic VGVzdFVzZXI6UGFzc3dvcmQ="
    })
};

@Injectable()
export class ViewCustomerService implements Resolve<any> {
    routeParams: any;
    customer: any;
    countries: [];
    currencies: [];
    emailContactTypes: [];
    phoneContactTypes: [];
    apiBaseURL = "http://a/api/";
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
        this.routeParams = route.params;

        return new Promise((resolve, reject) => {
            Promise.all([this.getCustomer()]).then(() => {
                resolve();
            }, reject);
        });
    }

    /**
     * Get customer
     *
     * @returns {Promise<any>}
     */
    getCustomer(): Promise<any> {
        return new Promise((resolve, reject) => {
            if (this.routeParams.id === "new") {
                this.onCustomerChanged.next(false);
                resolve(false);
            } else {
                this._httpClient
                    .get(
                        this.apiBaseURL +
                            "customer/GetCustomer/" +
                            this.routeParams.id,
                        httpOptions
                    )
                    .subscribe((response: any) => {
                        //debugger;
                        //alert('service');
                        this.customer = response;
                        this.onCustomerChanged.next(this.customer);
                        resolve(response);
                    }, reject);
            }
        });
    }

    /**
     * Save customer
     *
     * @param customer
     * @returns {Promise<any>}
     */
    saveCustomer(customer): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post("api/in-memory-customers/" + customer.id, customer)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    /**
     * Add customer
     *
     * @param customer
     * @returns {Promise<any>}
     */
    addCustomer(customer): Promise<any> {
        return new Promise((resolve, reject) => {
            this._httpClient
                .post("api/in-memory-customers/", customer)
                .subscribe((response: any) => {
                    resolve(response);
                }, reject);
        });
    }

    getBindableSources() {
        return new Promise((resolve, reject) => {
            this._httpClient
                .get(
                    this.apiBaseURL + "customer/GetBindableDataSources",
                    httpOptions
                )
                .subscribe((response: any) => {
                    alert("BindableSources");
                    this.countries = response.countries;
                    this.emailContactTypes = response.emailContactTypes;
                    this.phoneContactTypes = response.phoneContactTypes;
                    this.currencies = response.currencies;
                }, reject);
        });
    }
}
