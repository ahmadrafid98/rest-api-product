import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponse, ProductType } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-type',
  templateUrl: './product-type.component.html',
  styleUrls: ['./product-type.component.scss']
})
export class ProductTypeComponent implements OnInit, AfterViewInit {

  productTypes: MatTableDataSource<ProductType> = new MatTableDataSource();
  tableColumn: string[] = ["no", "type", "totalSold"];

  fromDateFormControl = new FormControl('', [Validators.required]);
  toDateFormControl = new FormControl('', [Validators.required]);

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private http: HttpService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    this.productTypes.sort = this.sort;
    this.productTypes.paginator = this.paginator;
  }

  dateFormat(date: Date) {
    var mm = date.getMonth() + 1;
    var dd = date.getDate();

    return [date.getFullYear(),
    (mm > 9 ? '' : '0') + mm,
    (dd > 9 ? '' : '0') + dd
    ].join('-');
  }

  onSubmit() {
    if (this.fromDateFormControl.valid && this.toDateFormControl.valid) {
      this.http.getProductTypes(this.dateFormat(this.fromDateFormControl.value), this.dateFormat(this.toDateFormControl.value), "ASC").subscribe((response: ApiResponse<ProductType>) => {
        this.productTypes.data = response.data;
        Swal.fire({ icon: "success", title: "Success Get Data" });
      }, () => {
        Swal.fire({ icon: "error", title: "Error Get Data" });
      })
    }
  }

}
