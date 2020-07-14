import { NgModule } from '@angular/core';
import { StarComponent } from './star.component';
import { from } from "rxjs";

@NgModule({
    declarations: [
        StarComponent
    ],
    exports: [
        StarComponent
    ]
})
export class StarModule {

}