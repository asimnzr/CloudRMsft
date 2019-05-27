import {
    Component,
    ElementRef,
    OnInit,
    ViewChild,
    ViewEncapsulation
} from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { DataSource } from '@angular/cdk/collections';
import { BehaviorSubject, fromEvent, merge, Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

import { fuseAnimations } from '@fuse/animations';
import { FuseUtils } from '@fuse/utils';

// tslint:disable-next-line: quotemark
import { MyCustomersService } from "app/main/customers/mycustomers/mycustomers.service";
import { takeUntil } from 'rxjs/internal/operators';

@Component({
    selector: 'customers-mycustomers',
    templateUrl: './mycustomers.component.html',
    styleUrls: ['./mycustomers.component.scss'],
    animations: fuseAnimations,
    encapsulation: ViewEncapsulation.None
})

export class MyCustomersComponent implements OnInit {
    dataSource: FilesDataSource | null;
    currentStopped = 'ShowBoth';
    currentWebsite = 4;

    currentTradeShow = 'null';
    currentMailingList = 3;
    currentLiveCustomers = false;

    currentMailingLstExport = 3;
    currentRecommendedStockist = 0;
    currentIgnoreBranches = false;
    currentShowDelAccts = false;
    currentShowHidden = false;

    customers: any[];
    coursesFilteredByCategory: any[];
    filteredCustomers: any[];
    searchTerm: string;

    displayedColumns = [
        'account',
        'name',
        'address1',
        'address3',
        'country',
        'phone',
        'email'
    ];

    @ViewChild(MatPaginator)
    paginator: MatPaginator;

    @ViewChild(MatSort)
    sort: MatSort;

    @ViewChild('filter')
    filter: ElementRef;

    // Private
    private _unsubscribeAll: Subject<any>;

    constructor(private _mycustomersService: MyCustomersService) {
        // Set the private defaults
        this._unsubscribeAll = new Subject();
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // -----------------------------------------------------------------------------------------------------

    /**
     * On init
     */
    ngOnInit(): void {
        this.dataSource = new FilesDataSource(
            this._mycustomersService,
            this.paginator,
            this.sort
        );

        // fromEvent(this.filter.nativeElement, "keyup")
        //     .pipe(
        //         takeUntil(this._unsubscribeAll),
        //         debounceTime(150),
        //         distinctUntilChanged()
        //     )
        //     .subscribe(() => {
        //         if (!this.dataSource) {
        //             return;
        //         }

        //         this.dataSource.filter = this.filter.nativeElement.value;
        //     });
    }

    /**
     * Filter customers by category
     */
    filterCustomers(showAll: boolean = false): void {
        
        if (showAll || this.searchTerm === undefined) { this.searchTerm = 'null'; }
        this._mycustomersService.getCustomers(
            this.searchTerm,
            this.currentShowDelAccts,
            this.currentStopped,
            this.currentWebsite,
            this.currentMailingList,
            this.currentMailingLstExport,
            this.currentIgnoreBranches,
            this.currentLiveCustomers,
            this.currentTradeShow,
            this.currentRecommendedStockist
        );
        if (this.searchTerm === 'null') {        this.searchTerm = ''; }


        // // Filter
        // if (this.currentStopped === "ShowBoth") {
        //     this.coursesFilteredByCategory = this.customers;
        //     this.filteredCustomers = this.customers;
        // } else {
        //     this.coursesFilteredByCategory = this.customers.filter(course => {
        //         return course.category === this.currentStopped;
        //     });

        //     this.filteredCustomers = [...this.coursesFilteredByCategory];
        // }
    }
}


export class FilesDataSource extends DataSource<any> {
    private _filterChange = new BehaviorSubject('');
    private _filteredDataChange = new BehaviorSubject('');

    /**
     * Constructor
     *
     * @param {mycustomersService} _mycustomersService
     * @param {MatPaginator} _matPaginator
     * @param {MatSort} _matSort
     */
    constructor(
        private _mycustomersService: MyCustomersService,
        private _matPaginator: MatPaginator,
        private _matSort: MatSort
    ) {
        super();

        this.filteredData = this._mycustomersService.mycustomers;
    }

    /**
     * Connect function called by the table to retrieve one stream containing the data to render.
     *
     * @returns {Observable<any[]>}
     */
    connect(): Observable<any[]> {
        const displayDataChanges = [
            this._mycustomersService.onCustomerChanged,
            this._matPaginator.page,
            this._filterChange,
            this._matSort.sortChange
        ];

        return merge(...displayDataChanges).pipe(
            map(() => {
                let data = this._mycustomersService.mycustomers.slice();

                data = this.filterData(data);

                this.filteredData = [...data];

                data = this.sortData(data);

                // Grab the page's slice of data.
                const startIndex =
                    this._matPaginator.pageIndex * this._matPaginator.pageSize;
                return data.splice(startIndex, this._matPaginator.pageSize);
            })
        );
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Accessors
    // -----------------------------------------------------------------------------------------------------

    // Filtered data
    get filteredData(): any {
        return this._filteredDataChange.value;
    }

    set filteredData(value: any) {
        this._filteredDataChange.next(value);
    }

    // Filter
    get filter(): string {
        return this._filterChange.value;
    }

    set filter(filter: string) {
        this._filterChange.next(filter);
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Filter data
     *
     * @param data
     * @returns {any}
     */
    filterData(data): any {
        if (!this.filter) {
            return data;
        }
        return FuseUtils.filterArrayByString(data, this.filter);
    }

    /**
     * Sort data
     *
     * @param data
     * @returns {any[]}
     */
    sortData(data): any[] {
        if (!this._matSort.active || this._matSort.direction === '') {
            return data;
        }

        return data.sort((a, b) => {
            let propertyA: number | string = '';
            let propertyB: number | string = '';

            switch (this._matSort.active) {
                
                case 'account':
                    [propertyA, propertyB] = [a.name, b.name];
                    break;
                case 'name':
                    [propertyA, propertyB] = [a.categories[0], b.categories[0]];
                    break;
                case 'address1':
                    [propertyA, propertyB] = [a.priceTaxIncl, b.priceTaxIncl];
                    break;
                case 'address3':
                    [propertyA, propertyB] = [a.quantity, b.quantity];
                    break;
                case 'address4':
                    [propertyA, propertyB] = [a.active, b.active];
                    break;
                case 'country':
                    [propertyA, propertyB] = [a.active, b.active];
                    break;
                case 'phone':
                    [propertyA, propertyB] = [a.active, b.active];
                    break;
                case 'email':
                    [propertyA, propertyB] = [a.active, b.active];
                    break;
            }

            const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

            return (
                (valueA < valueB ? -1 : 1) *
                (this._matSort.direction === 'asc' ? 1 : -1)
            );
        });
    }

    /**
     * Disconnect
     */
    disconnect(): void {}
}
