import { componentFactoryName } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChildGuard } from './child.guard';
import { ComponentGuard } from './component.guard';
import { EmployeeComponent } from './manager/employee/employee.component';
import { ManagerComponent } from './manager/manager.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { Child1Component } from './parent/child1/child1.component';
import { Child2Component } from './parent/child2/child2.component';
import { ParentComponent } from './parent/parent.component';
import { SearchComponent } from './search/search.component';
import { ServerComponent } from './server/server.component';

const routes: Routes = [
  {
    path:'parent',
    canActivate:[ComponentGuard],
    children:[
        {
          path:'',
          component:ParentComponent,
         
        },
        {
          path:'',
          canActivateChild:[ChildGuard],
          children:[

            {path:'child1',component:Child1Component},
            {path:'child2',component:Child2Component}
          ]
        }
    ]
  },
  {
    path:'server',
    component:ServerComponent
  },
  {
    path:'Manager/:id',
    component:ManagerComponent,  //e.g. of parameterized pipes
    canActivate:[ComponentGuard]   //e.g. canActivate Guard
  },
  {
    path:'search',
    component:SearchComponent  //e.g. of query params
  },
  { path: 'payments', loadChildren: () => import('./payments/payments.module').then(m => m.PaymentsModule) },
  {
    path:'**',
    component:PageNotFoundComponent //e.g. of wildcard routes
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
