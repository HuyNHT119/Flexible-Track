import { NgModule } from '@angular/core';
import { DayJsPipe } from '@fuse/pipes/dayjs/dayjs.pipe';

@NgModule({
    declarations: [
        DayJsPipe
    ],
    exports: [
        DayJsPipe
    ]
})
export class DayJsPipeModule {
}
