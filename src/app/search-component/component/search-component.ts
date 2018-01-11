import { Component } from '@angular/core';
import { AppConstant } from '../../shared/constant/app.constant';

@Component({
    moduleId: module.id,
    selector: 'app-search',
    templateUrl: 'search-component.html',
    styles: [`
        .header{
            padding:5px;
            background:black;
            color:#a8ff60;
          }
          `
    ]
})

export class SearchComponent {
    filter_text: string = AppConstant.CharecterList.FILTER_TEXT;
    typed_text: string = AppConstant.CharecterList.TYPED_TEXT;
    youHaveClicked: string;

    showInHeader(event: string) {
      this.youHaveClicked = event;
    }
}
