import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DbService } from 'src/app/services/db.service';


export interface UserData {
  id: string;
  name: string;
  email: string;
  telephone: string;
}

/** Constants used to fill up our data base. */
const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

// 'id', 'name', 'progress', 'fruit'

const users = [
  {
    'id': "Asanka",
    'name': "AAAAA",
    "progress": 87,
    "fruit": "CAAA"
  }
]




@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})

export class UsersComponent implements AfterViewInit {

  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | any;

  ngOnInit() {
  }

  constructor(private db:DbService) {
    // Get Surgent
    this.db.viewSurgeon().subscribe((res)=>{
      this.dataSourceSurgent = new MatTableDataSource(res);
    })
    

    // Get traineeSurgent
    this.db.viewTraineeSurgeon().subscribe((res)=>{
      this.dataSourceTraineeSurgent = new MatTableDataSource(res);
    })


    // Get Nurses
    this.db.viewNurse().subscribe((res)=>{
      this.dataSourceNurse = new MatTableDataSource(res);
    })

    // Get anesthetistic
    this.db.viewAnesthelogist().subscribe((res)=>{
      this.dataSourceAnesthetistic = new MatTableDataSource(res);
    })

        // Get anesthetistic
    this.db.viewadmin().subscribe((res)=>{
      this.dataSourceAdmin = new MatTableDataSource(res);
    })
    
  }

  ngAfterViewInit() {
    this.dataSourceSurgent.paginator = this.paginator;
    this.dataSourceSurgent.sort = this.sort;

    this.dataSourceTraineeSurgent.paginator = this.paginator;
    this.dataSourceTraineeSurgent.sort = this.sort;

    this.dataSourceNurse.paginator = this.paginator;
    this.dataSourceNurse.sort = this.sort;

    this.dataSourceAnesthetistic.paginator = this.paginator;
    this.dataSourceAnesthetistic.sort = this.sort;

    this.dataSourceAdmin.paginator = this.paginator;
    this.dataSourceAdmin.sort = this.sort;
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayedColumns: string[] = ['id', 'name', 'email', 'telephone'];
  dataSourceSurgent: MatTableDataSource<UserData>| any;
  dataSourceTraineeSurgent: MatTableDataSource<UserData>| any;
  dataSourceAnesthetistic: MatTableDataSource<UserData>| any;
  dataSourceNurse: MatTableDataSource<UserData> | any;
  dataSourceAdmin: MatTableDataSource<UserData>| any;

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  applyFilterSurgent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSurgent.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceSurgent.paginator) {
      this.dataSourceSurgent.paginator.firstPage();
    }
  }

  applyFilterAdmin(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAdmin.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceAdmin.paginator) {
      this.dataSourceAdmin.paginator.firstPage();
    }
  }


  applyFilterTraineeSurgent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceTraineeSurgent.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceTraineeSurgent.paginator) {
      this.dataSourceTraineeSurgent.paginator.firstPage();
    }
  }


  applyFilterNurse(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceNurse.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceNurse.paginator) {
      this.dataSourceNurse.paginator.firstPage();
    }
  }


  applyFilterAnesthetistic(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceAnesthetistic.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceAnesthetistic.paginator) {
      this.dataSourceAnesthetistic.paginator.firstPage();
    }
  }
  createNewUser(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

      return {
        id: id.toString(),
        name: name,
        email: 'asanka@gmail.com',
        telephone: '07666666666',
      };
  }

  // Get data Surgent
  getSurgents(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
      return {
        id: id.toString(),
        name: name,
        email: 'asanka@gmail.com',
        telephone: '07666666666',
      };
  }

  // Get data Nurse


  // Get data Anesthetistic
  getAnesthetistic(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
      return {
        id: id.toString(),
        name: name,
        email: 'asanka@gmail.com',
        telephone: '07666666666',
      };
  }


  // Get data TraineeSurgent
  getTraineeSurgent(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

      return {
        id: id.toString(),
        name: name,
        email: 'asanka@gmail.com',
        telephone: '07666666666',
      };
  }



}
