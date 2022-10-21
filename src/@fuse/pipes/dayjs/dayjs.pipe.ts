import { Pipe, PipeTransform } from '@angular/core';
import * as dayjs from 'dayjs';
import { Observable, Observer } from 'rxjs';

@Pipe({
    name: 'dayjs',
    pure: false
})
export class DayJsPipe implements PipeTransform {
    /**
     * Constructor
     */
    constructor() {
    }

    /**
     * Transform
     *
     */
    transform(value: string, format: string): string {
        return this.capitalize(dayjs(value).format(format));
    }

    private capitalize(value: string, lower: boolean = false): string {
        return (lower ? value.toLowerCase() : value).replace(/(?:^|\s|["'([{])+\S/g, match => match.toUpperCase());
    }
}
