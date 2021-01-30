import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CadranComponent} from './cadran/cadran.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'contact', component: ContactFormComponent},
  {path: 'search', component: SearchComponent},
  {path: 'cadran', children: [
    {path: 'actifs-techniques', component: CadranComponent},
    {path: 'bien-etre', component: CadranComponent},
    {path: 'confort-energie-environnement', component: CadranComponent},
    {path: 'espaces', component: CadranComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
