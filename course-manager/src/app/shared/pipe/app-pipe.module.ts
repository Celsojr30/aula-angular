import { NgModule } from "@angular/core";
import { ReplacePipe } from "./replace.pipe";
import { from } from "rxjs";

@NgModule({
    declarations: [
        ReplacePipe
    ],
    exports: [
        ReplacePipe
    ]
})

export class AppPipeModule {

}