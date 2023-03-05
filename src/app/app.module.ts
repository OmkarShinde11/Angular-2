import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { ServersComponent } from './servers/servers.component';
import { ManagerComponent } from './manager/manager.component';
import { EmployeeComponent } from './manager/employee/employee.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { CockpitComponent } from './cockpit/cockpit.component';
import { ServerInfoComponent } from './server-info/server-info.component';
import { OddEvenComponent } from './odd-even/odd-even.component';
import { BasicDirective } from './Directives/basic.directive';
import { BetterDirective } from './Directives/better.directive';
import { GamecontrollerComponent } from './gamecontroller/gamecontroller.component';
import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';
import { Host1Directive } from './Directives/host1.directive';
import { HostBindDirective } from './Directives/host-bind.directive';
import { StructureDirective } from './Directives/structure.directive';
import { ActiveUserComponent } from './active-user/active-user.component';
import { InactiveUserComponent } from './inactive-user/inactive-user.component';
import { UserService } from './Service/user.service';
import { CounterService } from './Service/counter.service';
@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ManagerComponent,
    EmployeeComponent,
    SearchComponent,
    PageNotFoundComponent,
    ParentComponent,
    Child1Component,
    Child2Component,
    CockpitComponent,
    ServerInfoComponent,
    OddEvenComponent,
    BasicDirective,
    BetterDirective,
    GamecontrollerComponent,
    OddComponent,
    EvenComponent,
    Host1Directive,
    HostBindDirective,
    StructureDirective,
    ActiveUserComponent,
    InactiveUserComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    {provide:LocationStrategy,useClass:PathLocationStrategy},
    UserService,CounterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
