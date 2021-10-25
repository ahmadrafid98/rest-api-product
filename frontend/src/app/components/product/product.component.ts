import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponse, Product } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, AfterViewInit {

  constructor(private httpService: HttpService) {

  }

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  products: MatTableDataSource<Product> = new MatTableDataSource();
  tableColumn: string[] = ["no", "name", "type", 'stock', "option"];

  ngOnInit(): void {

    this.httpService.getProducts().subscribe((response: ApiResponse<Product>) => {
      if (response.code === 200) {
        this.products.data = response.data;
      }
    })
  }

  ngAfterViewInit() {
    this.products.sort = this.sort;
    this.products.paginator = this.paginator;
  }

  onRefresh() {
    this.httpService.getProducts().subscribe((response: ApiResponse<Product>) => {
      if (response.code === 200) {
        this.products.data = response.data;
      }
    })
  }

  onFilterName(target: EventTarget | null) {
    const filterValue = target as HTMLInputElement;
    this.products.filterPredicate = (data, filter) =>
      data.name.toLowerCase().includes(filter);
    this.products.filter = filterValue.value.trim().toLowerCase();
  }

  onDelete(uuid: string) {
    this.httpService.deleteProduct(uuid).subscribe(() => {
      this.products.data = this.products.data.filter((product) => product.uuid !== uuid);
      Swal.fire(
        {
          title: 'Product Delete Successed',
          icon: 'success'
        }
      )
    }, () => {
      Swal.fire(
        {
          title: 'Product Delete Failed',
          icon: 'error'
        }
      )
    });
  }

}
