// this is an extra directive file I created by referencing below 👇
// https://www.sitepoint.com/practical-guide-angular-directives/#:~:text=Angular%20directives%20are%20used%20to,%2C%20attribute%20%2C%20class%20or%20comment%20.
import {Directive, ElementRef} from '@angular/core'; 

@Directive({
    selector:'[my-error]'
})

export class MyErrorDirective{
    constructor(elr:ElementRef){
        elr.nativeElement.style.background='red';
    }
}