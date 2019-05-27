import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { MatMomentDateModule } from "@angular/material-moment-adapter";
import { MatButtonModule, MatIconModule } from "@angular/material";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { TranslateModule } from "@ngx-translate/core";
import { IgxGridModule } from 'igniteui-angular';
import "hammerjs";

import { FuseModule } from "@fuse/fuse.module";
import { FuseSharedModule } from "@fuse/shared.module";
import { FuseProgressBarModule, FuseSidebarModule, FuseThemeOptionsModule } from "@fuse/components";

import { fuseConfig } from "app/fuse-config";

import { InMemoryStudioDbService } from "app/fake-db/in-memory-db.service";
import { AppComponent } from "app/app.component";
import { LayoutModule } from "app/layout/layout.module";
import { CustomersModule } from "app/main/customers/customers.module";

const appRoutes: Routes = [
    {
        path: "**",
        redirectTo: "customer"
    }
];

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,
        RouterModule.forRoot(appRoutes),

        TranslateModule.forRoot(),

        InMemoryWebApiModule.forRoot(InMemoryStudioDbService, {
            delay: 0,
            passThruUnknownUrl: true
        }),

        // Material moment date module
        MatMomentDateModule,

        // Material
        MatButtonModule,
        MatIconModule,

        // Fuse modules
        FuseModule.forRoot(fuseConfig),
        FuseProgressBarModule,
        FuseSharedModule,
        FuseSidebarModule,
        FuseThemeOptionsModule,

        //Ignite-ui module
        IgxGridModule,

        // App modules
        LayoutModule,
        CustomersModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
