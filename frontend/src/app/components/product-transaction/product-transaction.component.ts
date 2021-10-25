import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ApiResponse, ProductTransaction, ProductTransactionTable } from 'src/app/models';
import { HttpService } from 'src/app/services/http.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-transaction',
  templateUrl: './product-transaction.component.html',
  styleUrls: ['./product-transaction.component.scss']
})
export class ProductTransactionComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  productTransactions: MatTableDataSource<ProductTransactionTable> = new MatTableDataSource();
  tableColumn: string[] = ["no", "name", "type", "previousStockQuantity", "date", "amountSold", "option"];

  constructor(private httpService: HttpService) {
  }

  ngOnInit(): void {
    this.httpService.getProductTransactions().subscribe((response: ApiResponse<ProductTransaction>) => {
      if (response.code === 200) {
        const productTransactionList: ProductTransactionTable[] = response.data.map(({ uuid, date, amountSold, previousStockQuantity, product }) => {
          return { stock: product.stock, uuid, date, amountSold, previousStockQuantity, name: product.name, type: product.type }
        });
        this.productTransactions.data = productTransactionList;
      }
    });
  }

  ngAfterViewInit() {
    this.productTransactions.sort = this.sort;
    this.productTransactions.paginator = this.paginator;
  }

  onFilterName(target: EventTarget | null) {
    const filterValue = target as HTMLInputElement;
    this.productTransactions.filterPredicate = (data, filter) =>
      data.name.toLowerCase().includes(filter);
    this.productTransactions.filter = filterValue.value.trim().toLowerCase();
  }

  onFilterDate(target: EventTarget | null) {
    const filterValue = target as HTMLInputElement;
    this.productTransactions.filterPredicate = (data, filter) =>
      data.date.includes(filter);
    this.productTransactions.filter = filterValue.value.trim().toLowerCase();
  }

  onRefresh() {
    this.httpService.getProductTransactions().subscribe((response: ApiResponse<ProductTransaction>) => {
      if (response.code === 200) {
        const productTransactionList: ProductTransactionTable[] = response.data.map(({ uuid, date, amountSold, previousStockQuantity, product }) => {
          return { stock: product.stock, uuid, date, amountSold, previousStockQuantity, name: product.name, type: product.type }
        });
        this.productTransactions.data = productTransactionList;
      }
    })
  }

  onDelete(uuid: string) {
    this.httpService.deleteProductTransaction(uuid).subscribe(() => {
      this.productTransactions.data = this.productTransactions.data.filter((productTrans) => productTrans.uuid !== uuid);
      Swal.fire(
        {
          title: 'Product Transactions Delete Successed',
          icon: 'success'
        }
      )
    }, () => {
      Swal.fire(
        {
          title: 'Product Transactions Delete Failed',
          icon: 'error'
        }
      )
    });
  }

}
