import { Component, OnInit } from '@angular/core';
import { OrdService } from 'src/app/services/ord.service';

@Component({
  selector: 'app-list-ord',
  templateUrl: './list-ord.component.html',
  styleUrls: ['./list-ord.component.css']
})
export class ListOrdComponent implements OnInit {
  ordList : any[]=[];
  allOrd : any[]=[]
  name: string = "";
  constructor(private ordService :OrdService) { }

  ngOnInit(): void {
    this.getAllCategories();
  }


  getAllCategories() {
    this.ordService.getAllOrdonnances().subscribe(
      (result : any) => {
        this.ordList = result;
        this.allOrd = result;
      },
      (err : any) => {
        console.log(err);      
      }
    )
  }
  
  deleteCategory(category: any) {
     
    this.ordService.deleteOrdonnance(category.id).subscribe(
      (result :any) => {
        console.log(result);
        let index = this.ordList.indexOf(category);
        this.ordList.splice(index, 1);
       
      },
      (err : any) => {
        console.log(err);
      }
  
    )
  }
  
  filterByName(name: string) {    
    this.ordList = this.allOrd.filter( (c) => c.name?.includes(name));
  }







}
