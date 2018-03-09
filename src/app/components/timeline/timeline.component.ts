import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { SharepointService } from '../../services/sharepoint.service';
import { Timeline } from './timeline';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  itemSelect: Timeline;
  listaNoticias: Timeline[] = [];
  currentPage = 1;
  itemPorPage = 5;

  @Input() data: Timeline[];
  @Input() totalItems: number;



  constructor() {

  }

  ngOnInit() {
  }

  getTotalPages() {
    return  Math.ceil(this.totalItems / this.itemPorPage);
  }

  getPages() {

  }

  isValidPageNumber(page: number, totalPages: number): boolean {
    return page > 0 && page <= totalPages;
  }


  selectItem(e: Event, item: Timeline) {
    e.preventDefault();
    this.itemSelect = item;
  }

  selectPage( e: Event) {
    this.currentPage = this.currentPage + 1;
    console.log(this.currentPage);
    this.data = this.data.slice( (this.currentPage - 1 ) * this.itemPorPage, this.currentPage * this.itemPorPage);
  }

  onPrev() {
    if (this.currentPage < 1) {
        return;
    }

    this.currentPage = this.currentPage--;
    console.log(this.currentPage);

  }



}
