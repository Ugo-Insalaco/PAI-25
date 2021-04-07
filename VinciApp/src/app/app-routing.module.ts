import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SearchComponent } from './search/search.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { CadranComponent} from './cadran/cadran.component';
import { SolutionComponent} from './solution/solution.component';
import { ProjectComponent} from './project/project.component';
import { NewProjectComponent } from './new-project/new-project.component';

const routes: Routes = [
  {path: '', redirectTo: '', pathMatch: 'full'},
  {path: 'login', component: LoginComponent },
  {path: 'contact', component: ContactFormComponent},
  {path: 'project/:solution', component: ProjectComponent},
  {path: 'new-project', component: NewProjectComponent},
  {path: 'cadran/:cadran', component: CadranComponent},
  {path: 'cadran/:cadran/:solution', component: SolutionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
