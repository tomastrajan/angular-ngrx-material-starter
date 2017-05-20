import { NgModule } from '@angular/core';

import { CoreModule } from '../core';
import { SharedModule } from '../shared';

import { ExamplesRoutingModule } from './examples-routing.module';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  imports: [
    CoreModule,
    SharedModule,
    ExamplesRoutingModule
  ],
  declarations: [TodosComponent]
})
export class ExamplesModule { }
