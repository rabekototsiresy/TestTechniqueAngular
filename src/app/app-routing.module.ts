import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'users',
    loadChildren: () => import('./components/users/users.module').then(x => x.UsersModule)
  }, {
    path: '', redirectTo: 'users', pathMatch: 'full'
  }, 
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
