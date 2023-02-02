import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadChildren:()=>import('./Feature/user-list/user-list/user-list.module').then(m => m.UserListModule)
  },
  {
    path:'detail/:id',
    loadChildren:()=>import('./Feature/user-list/user-detail/user-detail.module').then(m => m.UserDetailModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
