import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CadranComponent} from './cadran/cadran.component';
import { SolutionComponent} from './solution/solution.component';
import { ProjectComponent} from './project/project.component';
import { ModifProjectComponent} from './modif-project/modif-project.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'contact', component: ContactFormComponent},
  {path: 'project/:solution', component: ProjectComponent},
  {path: 'modif-project/:project', component: ModifProjectComponent},
  {path: 'new-project', component: NewProjectComponent},
  {path: 'cadran', children: [
    {path: 'actifs-techniques', component: CadranComponent},
    {path: 'actifs-techniques/:solution', component: SolutionComponent},

    {path: 'bien-etre', component: CadranComponent},
    {path: 'bien-etre/:solution', component: SolutionComponent},

    {path: 'confort-energie-environnement', component: CadranComponent},
    {path: 'confort-energie-environnement/:solution', component: SolutionComponent},

    {path: 'espaces', component: CadranComponent},
    {path: 'espaces/:solution', component: SolutionComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: "enabled"})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
