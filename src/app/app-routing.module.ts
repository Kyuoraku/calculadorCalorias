import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AgeComponent } from './age/age.component';
import { GenderComponent } from './gender/gender.component';
import { HeightComponent } from './height/height.component';
import { params } from './params';
import { ResultComponent } from './result/result.component';
import { WeightComponent } from './weight/weight.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path: "welcome", component: WelcomeComponent},
  {path: "gender", component: GenderComponent},
  {path: "", redirectTo: '/welcome', pathMatch: 'full'},
  {path: "weight", component: WeightComponent, data: params},
  {path:"age", component: AgeComponent, data:params},
  {path: "height", component: HeightComponent, data: params},
  {path: "result", component: ResultComponent, data: params}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
