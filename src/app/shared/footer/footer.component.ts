import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  selectUniversity(path: string){
    this.router.navigate(["/"+path]).then(()=>{
      window.location.reload();
    });
    
  }

  selectCourse(path:string){
    this.router.navigate([path],{ queryParams: { 'lang': 'eng' }} ).then(() => {
      window.location.reload();
    });
  }

}
