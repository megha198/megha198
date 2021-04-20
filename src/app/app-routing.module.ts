import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{SettingComponent}from './setting/setting.component';
import{HomeComponent} from './home/home.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'setting',component:SettingComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
