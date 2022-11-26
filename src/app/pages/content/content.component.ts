import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from "../../components/data/dataFake"
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photCover:string="";
  contentTitle:string='';
  contentDescriptio:string='';
  private id:string | null ='0'
  
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      value=> this.id = (value.get('id'))
      )
    this.setValuesComponent(this.id)
  }
  setValuesComponent(id:string | null){
    const result = dataFake.filter(article => article.id == id)[0]
      this.contentTitle = result.title;
      this.photCover = result.photo;
      this.contentDescriptio =result.Description;
  }
}
