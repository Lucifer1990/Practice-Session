import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-spinner',
    template: `<img
                src="https://www.battleforthenet.com/images/change_avatar/avatar-red.gif"
                *ngIf="showSpinnerFromParent" />`,
    styles: ['img{width:100px}']
})

export class SpinnerComponent {
    @Input() showSpinnerFromParent: boolean;
}
