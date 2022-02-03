import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, HostBinding, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AuthService } from './services/auth.service';


interface menu {
  view: string;
  path: string;
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  @HostBinding('class') className = '';

  mobileQuery: MediaQueryList
  fillerNav = Array.from({ length: 50 }, (_, i) => `Nav Item ${i + 1}`)
  currentPath: string
  selectedCourse: string = 'Python'
  selectedLanguage: string | undefined
  selectedCoursePath: string = 'python'
  selectedLanguagePath: string | undefined
  is_dark: boolean = false

  selectedSideBar = ''
  selectedUni = ''
  f_url_path: string = ''

  loggedIn = false
  is_admin_staff = false
  is_medical_staff = false
  role = ''


  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, 
    media: MediaMatcher, 
    private router: Router, private auth : AuthService,
    private location: Location, private overlay: OverlayContainer) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)')
    this._mobileQueryListener = () => changeDetectorRef.detectChanges()
    this.mobileQuery.addListener(this._mobileQueryListener)
    this.currentPath = this.location.path()
    /*
    const matches = this.currentPath.match(/\(w+)/);
    if (matches) {
        console.log(matches[1]); // ordem1
    }
    */
    // check local storage
    if (localStorage.getItem('selected_language')) {
      var selected_language = localStorage.getItem('selected_language');
      if (selected_language) {
        this.selectedLanguage = JSON.parse(selected_language).view
      }
      if (selected_language) {
        this.selectedLanguagePath = JSON.parse(selected_language).path
      }

    } else {
      this.selectedLanguage = 'English'
      this.selectedLanguagePath = 'eng'
    }

    var selected_course = localStorage.getItem('selected_course');

    if (selected_course) {
      this.selectedCourse = JSON.parse(selected_course).view
      this.selectedCoursePath = JSON.parse(selected_course).path
    } else {
      this.selectedCourse = 'Select Course'
      this.selectedLanguagePath = 'eng'
    }

    var theme = localStorage.getItem('theme');

    if (theme) {
      this.is_dark = JSON.parse(theme).is_dark
    }

    var path = this.currentPath.substring(1, this.currentPath.length);
    console.log(path);
    var f_index = path.indexOf('/');
    this.selectedSideBar = path.substring(0, f_index);
    path = path.substring(f_index + 1, this.currentPath.length);


    this.selectedUni = this.selectedSideBar;
    if (this.selectedUni == "") {
      this.selectedUni = path;
    } else {

    }

    this.f_url_path = path.substring(0, path.indexOf('/'));
    this.selectedSideBar = this.selectedSideBar + "-" + path.substring(0, path.indexOf('/'));

    this.auth.loggedIn().subscribe((res)=>{

      
      this.loggedIn = true
      this.is_admin_staff = res['is_admin_staff']
      this.is_medical_staff = res['is_medical_staff']
      this.role = res['role']
    },(err)=>{
      this.loggedIn = false
      this.router.navigate(['/login'])
    })

  }


  

  change_theme() {
    this.is_dark = !this.is_dark
    localStorage.setItem('theme', JSON.stringify({ 'is_dark': this.is_dark }))
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }



  selectLanguage(view: string, path: string) {
    this.selectedLanguage = view
    this.selectedLanguagePath = path
    localStorage.setItem('selected_language', JSON.stringify({ 'view': view, 'path': path }))
    if ((this.router.url).split('?')[0] != '/') {
      this.router.navigate([(this.router.url).split('?')[0]], { queryParams: { 'lang': this.selectedLanguagePath } }).then(() => {
        window.location.reload();
      });
    }
  }



  selectUni: boolean = false;



  selectUniversity(name: string) {
    this.selectUni = true;
    this.selectedUni = name;
    localStorage.setItem('selected_uni', name);
    this.router.navigate(["/" + name]).then(() => {
      window.location.reload();
    });
  }

  selectCourse(view: string, path: string) {
    this.selectedCourse = view
    this.selectedCoursePath = path
    localStorage.setItem('selected_course', JSON.stringify({ 'view': view, 'path': path }))
    this.router.navigate([path], { queryParams: { 'lang': this.selectedLanguagePath } }).then(() => {
      window.location.reload();
    });
  }

  brandRoute() {
    this.router.navigate(["/"]).then(() => {
      window.location.reload();
    });
  }

}