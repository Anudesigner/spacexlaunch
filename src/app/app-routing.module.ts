import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpaceListComponent } from './space-list/space-list.component';


const routes: Routes = [
  {
    path: "space-list",
    component: SpaceListComponent,
    data: {
      title: "SpaceList",
      description: "SpaceList"
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
