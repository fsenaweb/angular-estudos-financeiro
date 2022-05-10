import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CreditosComponent} from './components/creditos/creditos.component';
import {HomeComponent} from "src/app/components/home/home.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'creditos', component: CreditosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
