import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


export interface UserData {
  id: string;
  name: string;
  progress: string;
  fruit: string;
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

  constructor() {
    // Get Surgent
    const surgents = Array.from({ length: 100 }, (_, k) => this.getSurgents(k + 1));
    this.dataSourceSurgent = new MatTableDataSource(surgents);

    // Get traineeSurgent
    const traineeSurgent = Array.from({ length: 100 }, (_, k) => this.getTraineeSurgent(k + 1));
    this.dataSourceTraineeSurgent = new MatTableDataSource(traineeSurgent);


    // Get Nurses
    const nurses = Array.from({ length: 100 }, (_, k) => this.getNurse(k + 1));
    this.dataSourceNurse = new MatTableDataSource(nurses);

    // Get anesthetistic
    const anesthetistic = Array.from({ length: 100 }, (_, k) => this.getAnesthetistic(k + 1));
    this.dataSourceAnesthetistic = new MatTableDataSource(anesthetistic);
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
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  displayedColumns: string[] = ['id', 'name', 'progress', 'fruit'];
  dataSourceSurgent: MatTableDataSource<UserData>;
  dataSourceTraineeSurgent: MatTableDataSource<UserData>;
  dataSourceAnesthetistic: MatTableDataSource<UserData>;
  dataSourceNurse: MatTableDataSource<UserData>;



  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;



  applyFilterSurgent(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSourceSurgent.filter = filterValue.trim().toLowerCase();
    if (this.dataSourceSurgent.paginator) {
      this.dataSourceSurgent.paginator.firstPage();
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
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
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
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }

  // Get data Nurse
  getNurse(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }

  // Get data Anesthetistic
  getAnesthetistic(id: number): UserData {
    const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

    return {
      id: id.toString(),
      name: name,
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
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
      progress: Math.round(Math.random() * 100).toString(),
      fruit: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
    };
  }


}
