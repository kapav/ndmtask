import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ItineraryService } from '../../services/itinerary';
import { Itinerary } from '../../interfaces/itinerary.interface';

@Component({
  selector: 'app-sheet',
  imports: [MatFormFieldModule, MatInputModule, MatTableModule, MatSortModule, MatPaginatorModule, MatToolbarModule],
  templateUrl: './sheet.html',
  styleUrl: './sheet.scss'
})
export class Sheet implements AfterViewInit {
  displayedColumns: string[] = ['address', 'gateway', 'interface'];
  dataSource: MatTableDataSource<Itinerary>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private itineraryService: ItineraryService) {
    this.dataSource = new MatTableDataSource(this.itineraryService.getAll());
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
}
