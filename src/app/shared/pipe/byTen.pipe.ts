import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'byTen'
})

export class ByTen implements PipeTransform {
    transform(value: string, args: string): string {
        return value.toString().concat(args);
    }
}