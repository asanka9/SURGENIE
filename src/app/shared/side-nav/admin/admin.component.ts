import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';

import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  mobileQuery: MediaQueryList | undefined;
  @Input() languagePath: any;
  @Input() selectedUni: any;
  selectedCategory = '';




  constructor( private router: Router, private location:Location) {

    var path = this.location.path();
    path = path.substring(1,path.length);
    path = path.substring(path.indexOf('/'),path.length);
    path = path.substring(1, path.length);


    console.log(path);
    var slashPos = path.indexOf('/');
    if(slashPos>0){
      this.selectedCategory = path.substring(0,slashPos);
    }else{
      this.selectedCategory = path.substring(0,path.indexOf('?'));
    }
    console.log(this.selectedCategory);


  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

  navigate(url: any) {
    this.router
      .navigate([url], { queryParams: { lang: this.languagePath } })
      .then(() => {
        window.location.reload();
      });
  }
}
