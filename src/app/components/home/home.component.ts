import { Component, OnInit } from '@angular/core';
import { Timeline } from '../timeline/timeline';
import { SharepointService } from '../../services/sharepoint.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  itemSelected: Timeline;
  totalItems: number;
  listaNoticias: any = [];
  timeLimit: number;
  data: any;

  constructor(private _sharepointService: SharepointService) {

    this._sharepointService.getItems().subscribe(
      (result: any) => {
        this.data = result.d.results;
        console.log('This.data :' + this.data);

        for (let i = 0; i < this.data.length; i++) {
          if (this.data[i].Visible) {
              // tslint:disable-next-line:prefer-const
            let item: any = {
              title: this.data[i].Title,
              content: this.data[i].Descripcion,
              visible: this.data[i].Visible,
              date: new Date(this.data[i].Fecha),
              link: this.data[i].Link.Url
            };
            this.listaNoticias.push(item);
          }
        }
        this.totalItems = this.listaNoticias.length;
        console.log(this.data);
      },
      error => {
        console.log(<any>error);
      }
    );

    // this._sharepointService.getMockData().subscribe(
    //   (result: Timeline[]) => {
    //    // console.log(result);
    //     this.data = result;
    //     this.totalItems = result.length;
    //   },
    //   error => console.log(error)
    // );

  }

  ngOnInit() {
  }

}
